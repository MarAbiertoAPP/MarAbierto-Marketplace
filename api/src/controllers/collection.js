const { createCollection, getCollectionPerID, getAllCollections, getCollectionUser } = require('../helpers/collection.js')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * route create Category
 */
exports.createCollection = async (req, res) => {
  try {
    const { userId, name, categoryId, frontPage, mini, description } = req.body
    const response = await createCollection(userId, name, categoryId, frontPage, mini, description)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
}

/**
 * route get collections
 */
exports.getCollection = async (req, res) => {
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
}
/**
 * get collection of user per id
 */
exports.getCollectioOfUser = async (req, res) => {
  const { userId } = req.query
  try {
    return res.status(200).send(await getCollectionUser(userId))
  } catch (error) {
    res.status(404).send({ msg: error })
  }
}
