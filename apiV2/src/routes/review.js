const express = require('express')
const  { createReview } = require('../utils/review')
const { review } = require('../db.js')

const router = express.Router()

router.post('/', async (req, res) => {
    const {id, description, rating} = req.body
    try {
     const newReview = await createReview(id, description, rating)
     return res.status(200).send(newReview)
    } catch (error) {
        return res.status(400).send({msg: "error creando la review", error: error.message})
    }
})

router.get('/', async (req, res) => {
    try {
      let reviews = await review.findAll()  
      return res.status(200).send(reviews)
    } catch (error) {
        return res.status(400).send({msg: error.message})
    }
})

module.exports = router