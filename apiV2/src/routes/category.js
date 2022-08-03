const express = require('express')
const router = express.Router()
const { createCategory, findName, getAll } = require('../utils/category')

// route to create a new category
router.post('/', async (req, res) => {
  try {
    const { name } = req.body
    const response = await createCategory(name)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

// route to get a category
router.get('/', async (req, res) => {
  const { name } = req.query
  if (name) {
    const find = await findName(name)
    return find
      ? res.status(200).send(find)
      : res.status(404).send({ msg: 'Not found' })
  } else {
    const find = await getAll()
    return find
      ? res.status(200).send(find)
      : res.status(404).send({ msg: 'Not found' })
  }
})

module.exports = router
