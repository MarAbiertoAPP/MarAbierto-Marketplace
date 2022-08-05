const express = require('express')
const router = express.Router()
const {createReport} = require('../utils/report')

router.post('/', async (req, res) => {
    try {
      const { target, type, description, id } = req.body
      const response = await createReport(target, type, description, id)
      return res.status(200).send(response)
    } catch (error) {
      return res.status(400).send({ msg: error })
    }
  })

  module.exports = {

  }