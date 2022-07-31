const { category } = require('../db.js')

// creates a categorie in the database based in name
const createCategory = async (name) => {
  try {
    name = name.toLowerCase()
    return await category.create({
      name: eliminarDiacriticos(name).toLowerCase()
    })
  } catch (error) {
    throw error.message
  }
}

// search for a category by name
const findName = async (name) => {
  try {
    return await category.findOne({
      where: {
        name: eliminarDiacriticos(name).toLowerCase()
      },
      raw: true
    })
  } catch (error) {
    return false
  }
}

// Search for a category by name, if not, it creates it
const findNameOrCreate = async (name) => {
  try {
    return await category.findOrCreate({
      where: {
        name: eliminarDiacriticos(name).toLowerCase()
      }
    })
  } catch (error) {
    return false
  }
}

// Search all categories
const getAll = async () => {
  try {
    return await category.findAll({})
  } catch (error) {
    return false
  }
}

// Search all categories
const getAllCategoryId = async () => {
  try {
    return await category.findAll({
      attributes: ['id'],
      raw: true,
      nest: true
    })
  } catch (error) {
    return false
  }
}

// Este metodo toma una cadena y le quita los diacriticos de talmanera
function eliminarDiacriticos (texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

module.exports = {
  createCategory,
  findName,
  findNameOrCreate,
  getAll,
  getAllCategoryId
}
