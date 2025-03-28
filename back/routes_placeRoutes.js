const express = require('express');
const { getPlaces, savePlace } = require('../controllers/placesController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', getPlaces);
router.post('/save', auth, savePlace);

module.exports = router;