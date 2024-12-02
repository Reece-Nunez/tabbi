const express = require('express');
const router = express.Router();

// Example Route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Tabbi API' });
});

module.exports = router;
