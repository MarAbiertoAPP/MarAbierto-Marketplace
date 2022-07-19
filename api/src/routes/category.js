const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category.js')

/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * route to post a place
 */
router.post('/', categoryController.createCategory)
/**
 * route to get a place
 */
router.get('/', categoryController.getCategory)

module.exports = router
