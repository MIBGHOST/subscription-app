// database.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/Amazon-Prime';

// Connect to the MongoDB database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const database = mongoose.connection;

// Set up event listeners for the database connection
database.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

database.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;

