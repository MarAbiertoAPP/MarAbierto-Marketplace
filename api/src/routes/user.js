const { Router } = require('express')
const axios = require('axios')
const { Op, User } = require('../db')
const router = Router()

router.get('/', async (req, res) => {
  res.send('working')
})

module.exports = router
