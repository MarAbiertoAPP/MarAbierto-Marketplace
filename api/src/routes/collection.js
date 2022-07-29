const express = require('express')
const router = express.Router()
const collectionController = require('../controllers/collection.js')

/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * route to post a place
 */
router.post('/', collectionController.createCollection)
/**
 * route to get per id
 */
router.get('/', collectionController.getCollection)

/**
 * route to get per id
 */
router.get('/user/', collectionController.getCollectioOfUser)

module.exports = router
