const express = require('express')
const { createReport } = require('../utils/report')
const { report} = require('../db.js')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { target, type, description, id } = req.body
    const response = await createReport(target, type, description, id)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

router.get('/', async (req, res) => {
  try {
    const response = await report.findAll()
    return res.status(201).json(response)
  } 
    catch (error) {
    return res.status(400).send({ msg: error })
  }
})



module.exports = router