const express = require('express')
const router = express.Router()
const placeController = require('../controllers/place.js')

/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * route to post a place
 */
router.post('/', placeController.createPlace)
/**
 * route to get a place
 */
router.get('/', placeController.getPlace)

module.exports = router
