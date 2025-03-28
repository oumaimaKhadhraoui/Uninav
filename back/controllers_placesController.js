const Place = require('../models/Place');

// @desc    Get all places
// @route   GET /api/places
exports.getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Save place to user's favorites
// @route   POST /api/places/save
exports.savePlace = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user.savedPlaces.includes(req.body.placeId)) {
      user.savedPlaces.push(req.body.placeId);
      await user.save();
    }
    res.json(user.savedPlaces);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};