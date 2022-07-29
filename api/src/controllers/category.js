const { createCategory: create, findName, getAll } = require('../helpers/category.js')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * route create Category
 */
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body
    const response = await create(name)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
}

/**
 * route get category
 */
exports.getCategory = async (req, res) => {
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
}
