const express = require('express');
const { getPlaces, savePlace, getBookmarkedPlaces } = require('../controllers/placesController');
//const auth = require('../middlewares/auth');
const passport = require('passport');

const router = express.Router();

router.get('/', getPlaces);
router.post('/save', passport.authenticate('jwt', { session: false }), savePlace);
router.get('/bookmarked', passport.authenticate('jwt', { session: false }), getBookmarkedPlaces); // New route

module.exports = router;