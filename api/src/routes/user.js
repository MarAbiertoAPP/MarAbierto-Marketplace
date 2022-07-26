require('dotenv').config()
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

/**
 * @author Nicolas suarez
 */

/**
 * Create New User Register
 */
router.post('/signup', userController.signUp)

/**
 *  get User
 */
router.get('/profile', userController.signUp)

/**
 * Iniciar sesion
 */
router.post('/signin', userController.signIn)
// router.post('/getpay', userController.payNft)
// /users/getsecret

module.exports = router
