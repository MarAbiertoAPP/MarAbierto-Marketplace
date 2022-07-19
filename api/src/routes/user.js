require('dotenv').config()
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

/**
 * @author Nicolas suarez
 */

/**
 * Create New User
 */
router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)

module.exports = router
