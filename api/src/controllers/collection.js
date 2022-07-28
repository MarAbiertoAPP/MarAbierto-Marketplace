const { createCollection } = require('../helpers/collection.js')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * route create Category
 */
exports.createCollection = async (req, res) => {
  try {
    const { userId, name } = req.body
    const response = await createCollection(userId, name)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
}

/**
 * route get category
 */
/** exports.getCollection = async (req, res) => {
  const { name } = req.query
  if (name) {
    const find = await getCollection(name)
    return find
      ? res.status(200).send(find)
      : res.status(404).send({ msg: 'Not found' })
  } else {
    const find = await getAll()
    return find
      ? res.status(200).send(find)
      : res.status(404).send({ msg: 'Not found' })
  }
} */
