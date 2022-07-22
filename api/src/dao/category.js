const { category } = require('../db.js')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * creates a categorie in the database based in name
 */
const createCategory = async (name) => {
  try {
    name = name.toUpperCase()
    return await category.create({
      name: eliminarDiacriticos(name).toUpperCase()
    })
  } catch (error) {
    throw error.message
  }
}
/**
 * search for a category by name
 * @param {*} name
 * @returns
 */
const findName = async (name) => {
  try {
    return await category.findOne({
      where: {
        name: eliminarDiacriticos(name).toUpperCase()
      }
    })
  } catch (error) {
    return false
  }
}
/**
 * Search for a category by name, if not, it creates it
 * @param {*} name
 * @param {*} id
 * @returns
 */
const findNameOrCreate = async (name) => {
  try {
    return await category.findOrCreate({
      where: {
        name: eliminarDiacriticos(name).toUpperCase()
      }
    })
  } catch (error) {
    return false
  }
}

/**
 * Search for a category by name, if not, it creates it
 * @param {*} name
 * @param {*} id
 * @returns
 */
const getAll = async () => {
  try {
    return await category.findAll({})
  } catch (error) {
    return false
  }
}

/**
 * Este metodo toma una cadena y le quita los diacriticos de talmanera
 * @param {String} texto
 * @returns {String} Cadena nueva
 */
function eliminarDiacriticos (texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

module.exports = {
  createCategory,
  findName,
  findNameOrCreate,
  getAll
}
