const express = require('express');
const { getPlaces, savePlace } = require('../controllers/placesController');
//const auth = require('../middlewares/auth');
const passport = require('passport');

const router = express.Router();

router.get('/', getPlaces);
router.post('/save', passport.authenticate('jwt', { session: false }), savePlace);

module.exports = router;