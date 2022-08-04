const express = require('express')
const router = express.Router()
const { collection } = require('../db')
const { findName } = require('../utils/category')
const { createCollection, getCollectionPerID, getCollectionUser, getCollectionByName } = require('../utils/collection')

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
router.get('/detail/:name', async (req, res) => {
  const { name } = req.params
  const { title, price } = req.query
  try {
    if (name) {
      const collectionSelected = await getCollectionByName(name)
      if (!collectionSelected) return res.send('collection don\'t exist')
      const collectionIdByName = collectionSelected.dataValues.id
      const detailCollection = await getCollectionPerID(collectionIdByName, title, price)
      return res.status(200).json(detailCollection)
    }
    res.send('working')
  } catch (error) {
    res.status(404).send({ msg: error })
  }
})

// Get all collections if a query category exist, filter by name
router.get('/all', async (req, res) => {
  try {
    const { category } = req.query
    const offset = (req.query.page - 1) || 0
    const limit = req.query.limit || 10
    const whereQuery = {}

    if (category) {
      const categoryFilter = await findName(category)
      if (categoryFilter) whereQuery.categoryId = categoryFilter.id
    }

    const count = await collection.count({
      where: whereQuery
    })

    const allCollections = await collection.findAll({
      where: whereQuery,
      attributes: ['id', 'frontPage', 'mini', 'name'],
      offset: offset * limit,
      limit
    })
    res.json({
      collections: allCollections,
      currentPage: (offset + 1),
      totalCollections: count,
      totalPages: Math.ceil(count / limit)
    })
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
