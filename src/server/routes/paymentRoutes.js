const { db } = require('../config/firebase');
const express = require("express");
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const courses = require('../data/courses');
const { FieldValue } = require('firebase/firestore');

// Middleware
const validateCourse = async (req, res, next) => {
    try {
        const { courseId } = req.body;
        if (!courseId) {
            return res.status(400).json({ error: 'Missing courseId' });
        }
        
        const course = courses.find(course => course.id === courseId);
        if (!course) {  
            return res.status(404).json({ error: 'Course not found' });
        }
        req.course = course;
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Service functions
const createStripeSession = async (course, userId) => {
    return await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: course.title,
                    description: course.description,
                },
                unit_amount: Math.round(course.price * 100),
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: `${process.env.DOMAIN}/`,
        cancel_url: `${process.env.DOMAIN}/cancel`,
        metadata: { courseId: course.id, userId },
        client_reference_id: userId
    });
};

const savePurchase = async (sessionData) => {
    try {
        const { userId, courseId } = sessionData.metadata;
        
        // Save to purchases collection
        const purchaseRef = await db.collection('purchases').add({
            userId,
            courseId,
            purchaseDate: new Date(),
            status: 'completed'
        });

        // Update user's document
        await db.collection('users').doc(userId).update({
            purchases: FieldValue.arrayUnion({
                courseId,
                purchaseId: purchaseRef.id,
                purchaseDate: new Date()
            })
        });

        return purchaseRef.id;
    } catch (error) {
        console.error('Error saving purchase:', error);
        throw error;
    }
};

const checkUserPurchase = async (userId, courseId) => {
    try {
        const userDoc = await db.collection('users').doc(userId).get();
        const purchases = userDoc.data()?.purchases || [];
        return purchases.some(purchase => purchase.courseId === courseId);
    } catch (error) {
        console.error('Error checking purchase:', error);
        throw error;
    }
};

// Route handlers
router.post("/create-checkout-session", validateCourse, async (req, res) => {
    try {
        const { courseId, userId } = req.body;
        if (!userId) {
            return res.status(400).json({ error: 'User must be logged in' });
        }
        const session = await createStripeSession(req.course, userId);
        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
    try {
        const sig = req.headers['stripe-signature'];
        const event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
        if (event.type === 'checkout.session.completed') {
            await savePurchase(event.data.object);
        }
        res.json({ received: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/check-purchase/:courseId", async (req, res) => {
    try {
        const userId = req.user?.uid;
        if (!userId) {
            return res.json({ hasPurchased: false });
        }
        const hasPurchased = await checkUserPurchase(userId, req.params.courseId);
        res.json({ hasPurchased });
    } catch (error) {
        res.status(500).json({ error: "Failed to check purchase status" });
    }
});

router.get("/health", (req, res) => {
    res.json({status: "Payment service is running"});
});

module.exports = router;