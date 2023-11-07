// authRoutes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Import the User model (assumes you have defined a User model)
const User = require('../models/User');

// Registration route
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Check if the username or password is missing
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  // Check if the username is already taken
  User.findOne({ username }, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error.' });
    }
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken.' });
    }

    // Create a new user
    const newUser = new User({ username });
    newUser.setPassword(password);

    newUser.save((err) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating the user.' });
      }
      return res.status(200).json({ message: 'User registration successful.' });
    });
  });
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  // If this function is called, authentication was successful.
  // `req.user` now contains the authenticated user.
  res.status(200).json({ message: 'Login successful.' });
});

module.exports = router;

