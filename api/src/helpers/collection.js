const { collection } = require('../db.js')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * creates a Collections in the database based in name
 */
const createCollection = async (userId, name) => {
  try {
    return await collection.create({
      name: eliminarDiacriticos(name).toUpperCase(),
      userId
    })
  } catch (error) {
    throw error.message
  }
}

const getCollection = async (name) => {
  try {
    return await collection.findOne({
      where: {
        name: eliminarDiacriticos(name).toUpperCase()
      }
    })
  } catch (error) {
    throw error.message
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

/**
 * Por favor ni me miren este metodo gracias solo ara casos de prueba borrar despues.
 */

const deleteAllCollect = async () => {
  try {
    return await collection.destroy({
      where: {}
    })
  } catch (error) {
    throw error.message
  }
}
module.exports = {
  createCollection,
  getCollection,
  deleteAllCollect
}
