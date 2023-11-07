// subscription.js
const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plan: String,
  billingInterval: String,
});

module.exports = mongoose.model('Subscription', subscriptionSchema);

