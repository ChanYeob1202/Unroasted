require('dotenv').config();
const express = require("express");
const { db } = require('./config/firebase');
const apiRoutes = require('./routes/api');
const paymentRoutes = require("./routes/paymentRoutes");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const courses = require("./data/courses");

// Express Setup
const app = express();
const PORT = 4242;

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes); //for any url that starts with /api, use the apiRoutes
app.use('/payment', paymentRoutes); //for any url that starts with /payment, use the paymentRoutes

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

