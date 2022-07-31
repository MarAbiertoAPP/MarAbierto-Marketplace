const { Router } = require('express')
const payment = require('./payment')
const category = require('./category')
const collection = require('./collection')
const nft = require('./nft')
const user = require('./user')

const router = Router()

router.use('/payment', payment)
router.use('/category', category)
router.use('/collection', collection)
router.use('./nft', nft)
router.use('/users', user)

module.exports = router