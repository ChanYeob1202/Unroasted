const express = require("express");
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { db } = require('../config/firebase');
const courses = require('../data/courses'); // Import courses data

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { courseId } = req.body;
    
    // Find the course in our database
    const course = courses.find(c => c.id === courseId);
    
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
            unit_amount: Math.round(course.price * 100), // Convert price to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN}/cancel`,
      metadata: {
        courseId: course.id,
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook to handle successful payments
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    try {
      // Verify the course exists
      const course = courses.find(c => c.id === session.metadata.courseId);
      if (!course) {
        throw new Error('Course not found');
      }

      // Add course to user's purchases in Firebase
      await db.collection('purchases').add({
        courseId: session.metadata.courseId,
        courseName: course.title,
        userId: session.client_reference_id,
        paymentId: session.payment_intent,
        amount: session.amount_total,
        status: 'completed',
        createdAt: new Date(),
        purchaseDate: new Date(),
      });
    } catch (error) {
      console.error('Error recording purchase:', error);
    }
  }

  res.json({ received: true });
});

module.exports = router;