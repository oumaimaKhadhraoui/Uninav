const Place = require('../models/Place');
const User = require('../models/User');  // Adjust the path based on your folder structure

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
  console.log('Received place ID:', req.body.placeId);  // Check if placeId is received correctly

  try {
    const user = await User.findById(req.user.id);
    if (!user.savedPlaces.includes(req.body.placeId)) {
      user.savedPlaces.push(req.body.placeId);
      await user.save();
    }
    // Populate savedPlaces to get place details
    const populatedUser = await User.findById(req.user.id).populate('savedPlaces');
    res.json({ savedPlaces: populatedUser.savedPlaces });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// @desc Get user's bookmarked places
// @route GET /api/places/bookmarked
exports.getBookmarkedPlaces = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('savedPlaces');
    res.json({ bookmarkedPlaces: user.savedPlaces });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// @desc    Delete a place from user's saved places
// @route   DELETE /api/places/:placeId
exports.deleteSavedPlace = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Safely filter out the place
    user.savedPlaces = user.savedPlaces.filter(
      (id) => id && id.toString() !== req.params.placeId
    );

    await user.save();

    const populatedUser = await User.findById(req.user.id).populate('savedPlaces');
    res.json({ savedPlaces: populatedUser.savedPlaces });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: err.message });
  }
};
