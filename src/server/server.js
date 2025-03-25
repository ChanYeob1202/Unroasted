require('dotenv').config();
const express = require("express");
const apiRoutes = require('./routes/api');
const paymentRoutes = require("./routes/paymentRoutes");
const cors = require('cors');

// Express Setup
const app = express();
const PORT = 4242;

// Webhook middleware must come before express.json()
app.post('/payment/webhook', express.raw({type: 'application/json'}));

// General middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api', apiRoutes); 
//for any url that starts with /api, use the apiRoutes
app.use('/payment', paymentRoutes); 
//for any url that starts with /payment, use the paymentRoutes

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
