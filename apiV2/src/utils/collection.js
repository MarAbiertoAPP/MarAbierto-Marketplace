const { collection, nft, user, Op } = require('../db.js')

// creates a Collections in the database based in name
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

// Get collection per name
const getCollectionByName = async (name) => {
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

// Get all collections
const getAllCollections = async (offset = 0, limit = 25) => {
  try {
    return await collection.findAll({
      where: {},
      attributes: ['id', 'frontPage', 'mini', 'name'],
      offset: offset * limit,
      limit
    })
  } catch (error) {
    throw error.message
  }
}

// Get collections per UserID
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

// Get collection per ID
const getCollectionPerID = async (id, title, price) => {
  try {
    const collectionS = await collection.findOne({
      where:
      {
        id
      },
      attributes: ['id', 'name', 'description', 'mini', 'frontPage'],
      include: [{
        model: user,
        attributes: ['name', 'nickname']
      }]
    })
    const whereQuery = {}
    whereQuery.collectionId = id
    if (title) whereQuery.title = { [Op.iLike]: `%${title}%` }
    if (price) {
      const priceMinMax = price.split('_')
      whereQuery.price = { [Op.between]: [Number(priceMinMax[0]), Number(priceMinMax[1])] }
    }
    const nfts = await nft.findAll({
      where: whereQuery,
      attributes: ['id', 'title', 'description', 'img', 'price', 'isActive'],
      include: [{
        model: collection,
        attributes: ['id', 'name']
      }]
    })
    console.log(nfts.length)
    return {
      collectionS,
      nfts
    }
  } catch (error) {
    throw error.message
  }
}

// Get all collections per ID
const getAllCollectionsID = async () => {
  try {
    return await collection.findAll({
      attributes: ['id'],
      raw: true,
      nest: true
    })
  } catch (error) {
    return false
  }
}

// Get collection ID by Name
const getCollectionIdByName = async (name) => {
  try {
    return await collection.findOne({
      where: {
        name: eliminarDiacriticos(name).toLowerCase()
      },
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

// Por favor ni me miren este metodo gracias solo ara casos de prueba borrar despues.
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
  getCollectionByName,
  getCollectionIdByName,
  deleteAllCollect,
  getCollectionPerID,
  getAllCollections,
  getAllCollectionsID,
  getCollectionUser
}
