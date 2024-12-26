const express = require('express');
const router = express.Router();
const { registerForEvent } = require('../controllers/eventRegistrationController');
const { protect } = require('../middleware/Middleware'); // Ensure correct casing

console.log('Event Registration Routes loaded'); // Logging to confirm route loading

router.post('/register', protect, registerForEvent);

module.exports = router;