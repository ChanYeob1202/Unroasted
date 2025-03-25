const express = require("express");
const { db } = require('../config/firebase');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const courses = require('../data/courses'); // Import courses data

console.log('Firebase db initialized:', !!db);
console.log('Courses loaded:', !!courses);

// Create checkout session
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { courseId } = req.body;

    // Find the course in our database
    const course = courses.find(course => course.id === courseId);
    
    // Validate course exists
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: course.title,
              description: course.description,
            },
            unit_amount: Math.round(course.price * 100), 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.DOMAIN}/`,
      cancel_url: `${process.env.DOMAIN}/cancel`,
      metadata:{
        courseId: courseId,
      }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook to handle successful payments
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  console.log('🎯 Webhook received at:', new Date().toISOString());
  console.log('Request headers:', req.headers);
  
  const sig = req.headers['stripe-signature'];
  let event;
  
  try {
    // Verify webhook signature
    console.log('Webhook secret exists:', !!process.env.STRIPE_WEBHOOK_SECRET);
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log('✅ Event verified:', event.type);
    
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log('Session data:', {
        id: session.id,
        metadata: session.metadata,
        customer: session.customer,
        amount: session.amount_total
      });
      
      try {
        // Test Firebase connection
        console.log('Testing Firebase write...');
        const testRef = await db.collection('test').add({
          test: true,
          timestamp: new Date()
        });
        console.log('Firebase test write successful:', testRef.id);

        // Verify course exists
        const course = courses.find(c => c.id === session.metadata.courseId);
        console.log('Looking for course:', session.metadata.courseId);
        console.log('Available courses:', courses.map(c => c.id));
        
        if (!course) {
          console.error('❌ Course not found');
          throw new Error('Course not found');
        }
        console.log('Found course:', course);

        // Prepare purchase data
        const purchaseData = {
          courseId: session.metadata.courseId,
          courseName: course.title,
          userId: session.client_reference_id || 'anonymous',
          paymentId: session.payment_intent,
          amount: session.amount_total,
          status: 'completed',
          createdAt: new Date(),
          purchaseDate: new Date(),
          customerEmail: session.customer_details?.email
        };
        console.log('Attempting to save purchase data:', purchaseData);

        // Save to Firebase
        const docRef = await db.collection('purchases').add(purchaseData);
        console.log('✅ Purchase saved successfully with ID:', docRef.id);

      } catch (error) {
        console.error('❌ Detailed error:', {
          message: error.message,
          stack: error.stack,
          code: error.code
        });
      }
    }

    res.json({ received: true });
  } catch (err) {
    console.error('❌ Webhook verification failed:', err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

module.exports = router;