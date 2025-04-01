const { createStripeSession } = require('../services/stripeService');
const { savePurchase } = require('../services/purchaseService');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const handleCheckout = async (req, res) => {
    try {
        const { courseId, userId } = req.body;
        if (!userId) {
            return res.status(400).json({ error: 'User must be logged in' });
        }

        const session = await createStripeSession(req.course, userId);
        res.json({ url: session.url });
    } catch (error) {
        console.error('Checkout error:', error);
        res.status(500).json({ error: error.message });
    }
};

const handleWebhook = async (req, res) => {
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
        console.error('Webhook error:', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    handleCheckout,
    handleWebhook
}; 