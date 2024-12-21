// filepath: /server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController');

// Register a new user
router.post('/register', registerUser);

// Authenticate user
router.post('/login', authUser);

module.exports = router;