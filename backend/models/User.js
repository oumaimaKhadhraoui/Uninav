const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  savedPlaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }], // Add this field
  });

module.exports = mongoose.model('User', UserSchema);
