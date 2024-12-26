const express = require('express');
const router = express.Router();
const { registerForEvent } = require('../controllers/eventRegistrationController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', protect, registerForEvent);

module.exports = router;