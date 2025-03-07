const express = require("express");
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Add security headers middleware
const setSecurityHeaders = (req, res, next) => {
  // Set multiple security headers
  res.setHeader('Permissions-Policy', 'interest-cohort=()');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
};

// Apply the middleware to all routes in this router
router.use(setSecurityHeaders);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { courseId, price, title } = req.body;
    
    // Validate incoming data
    if (!courseId || !price || !title) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Validate price is a positive number
    if (price <= 0 || typeof price !== 'number') {
      return res.status(400).json({ error: 'Invalid price' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: title,
              metadata: {
                courseId: courseId
              },
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        courseId: courseId,
      },
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/education/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/education`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe session creation error:', error);
    res.status(500).json({ error: 'Payment session creation failed' });
  }
});

router.post("/verify-payment", async (req, res) => {
    try {
        const { sessionId } = req.body;
        
        if (!sessionId) {
            return res.status(400).json({ error: 'Session ID is required' });
        }

        const session = await stripe.checkout.sessions.retrieve(sessionId);
        
        if (session.payment_status === 'paid') {

            // Here you should:
            // 1. Update your database to mark the course as purchased for the user
            // 2. Grant access to the course content
            // 3. Maybe send a confirmation email
        
            return res.json({ success: true });
        } else {
            return res.status(400).json({ error: 'Payment not completed' });
        }
    } catch (error) {
        console.error('Payment verification error:', error);
        res.status(500).json({ error: 'Payment verification failed' });
    }
});