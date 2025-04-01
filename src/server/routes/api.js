const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');

router.get('/', (req, res) => {
    console.log(`API hit at ${new Date().toISOString()}`);
    res.json({ message: 'API endpoint' });
});


module.exports = router; 

