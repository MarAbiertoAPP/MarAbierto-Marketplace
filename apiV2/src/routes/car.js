const express = require('express')
const router = express.Router()
const { postToCar, deleteTocar, deleteTotalCar, getCarByUserID } = require('../utils/car')

// Route post nft a car
router.post('/', async (req, res) => {
  try {
    const { nftId, userId } = req.body
    return res.status(200).send(await postToCar(nftId, userId))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

router.delete('/', async (req, res) => {
  try {
    const { nftId, userId } = req.body
    return res.sendStatus(200).send(await deleteTocar(nftId, userId))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    return res.sendStatus(200).send(await deleteTotalCar(userId))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

// get car by id
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    return res.status(200).send(await getCarByUserID(userId))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

module.exports = router
