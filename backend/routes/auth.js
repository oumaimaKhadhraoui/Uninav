const express = require('express');
const passport = require('passport');
const { register, login, googleCallback, getMe } = require('../controllers/authController');

const router = express.Router();

// User Registration
router.post('/register', register);

// User Login
router.post('/login', login);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), googleCallback);

// Fetch Logged-In User
router.get('/me', passport.authenticate('jwt', { session: false }), getMe);

module.exports = router;