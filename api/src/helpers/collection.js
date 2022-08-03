const { collection, nft } = require('../db.js')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * creates a Collections in the database based in name
 */
const createCollection = async (userId, name, categoryId, frontPage, mini, description) => {
  try {
    return await collection.create({
      name: eliminarDiacriticos(name).toLowerCase(),
      userId,
      categoryId,
      frontPage,
      mini,
      description: eliminarDiacriticos(description)
    })
  } catch (error) {
    console.log(error)
    throw error.message
  }
}
/**
 * GET COLLECTION PER NAME
 * @param {*} name
 * @returns
 */
const getCollection = async (name) => {
  try {
    return await collection.findOne({
      where: {
        name: eliminarDiacriticos(name).toLowerCase()
      }
    })
  } catch (error) {
    throw error.message
  }
}
/**
 * get all
 */

const getAllCollections = async (offset = 0, limit = 25) => {
  try {
    return await collection.findAll({
      where: {},
      offset: offset * limit,
      limit
    })
  } catch (error) {
    throw error.message
  }
}
/**
 * get Collections per userID
 */

const getCollectionUser = async (userId, offset = 0, limit = 10) => {
  try {
    return await collection.findAll({
      where: {
        userId
      },
      offset: offset * limit,
      limit
    })
  } catch (error) {
    throw error.message
  }
}

/**
 * Get Per id
 * @param {*} id
 * @returns
 */
const getCollectionPerID = async (id) => {
  try {
    const collectionS = await collection.findOne({
      where:
      {
        id
      },
      attributes: ['id', 'name', 'description', 'mini', 'frontPage']
    })
    const nfts = await nft.findAll({
      where: {
        collectionId: id
      },
      attributes: ['id', 'title', 'description', 'path', 'price', 'isActive'],
      include: [{
        model: collection,
        attributes: ['id', 'name']
      }
      ]
    })
    return {
      collectionS,
      nfts
    }
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
  deleteAllCollect,
  getCollectionPerID,
  getAllCollections,
  getCollectionUser
}
