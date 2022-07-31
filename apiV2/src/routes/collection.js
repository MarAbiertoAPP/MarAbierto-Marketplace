const express = require('express')
const router = express.Router()
const { createCollection, getAllCollections, getCollectionPerID, getCollectionUser } = require('../utils/collection')

// route to create a collection
router.post('/', async (req, res) => {
  try {
    const { userId, name, categoryId, frontPage, mini, description } = req.body
    const response = await createCollection(userId, name, categoryId, frontPage, mini, description)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

// route to get collection by id
router.get('/', async (req, res) => {
  const { id } = req.query
  try {
    if (id) {
      const find = await getCollectionPerID(id)
      return find
        ? res.status(200).send(find)
        : res.status(404).send({ msg: 'Not found' })
    } else {
      return res.status(200).send(await getAllCollections())
    }
  } catch (error) {
    res.status(404).send({ msg: error })
  }
})

// route to get collection of user by id
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    return res.status(200).send(await getCollectionUser(userId))
  } catch (error) {
    res.status(404).send({ msg: error })
  }
})

module.exports = router
