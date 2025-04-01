const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createStripeSession = async (course, userId) => {
    return await stripe.checkout.sessions.create({
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
        metadata: {
            courseId: course.id,
            userId: userId
        },
        client_reference_id: userId
    });
};

module.exports = {
    createStripeSession
};