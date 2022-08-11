const { nft, collection /* favorite */ } = require('../db.js')
// const User = require('../models/User.js')
const { getCollectionIdByName } = require('./collection.js')
const { findUser } = require('../utils/user')

// Create nft
const createNFT = async (title, description, img, price, collectionName, id) => {
  try {
    const collection = await getCollectionIdByName(collectionName)
    const ownerId = collection.userId
    const collectionId = collection.id
    return await nft.create({
      title: title.toLowerCase(),
      description,
      img,
      price,
      collectionId,
      id,
      ownerId
    })
  } catch (error) {
    throw error.message
  }
}

const returnAllBanned = async () => {
  try {
    return await nft.findAll({
      where: {
        isBanned: true
      }
    })
  } catch (error) {
    console.log(error)
    throw error.message
  }
}

const banANft = async (id) => {
  try {
    return await nft.update({ isBanned: true }, {
      where: {
        id
      }
    })
  } catch (error) {
    console.log(error)
    throw error.message
  }
}

const unbanANft = async (id) => {
  try {
    return await nft.update({ isBanned: false }, {
      where: {
        id
      }
    })
  } catch (error) {
    console.log(error)
    throw error.message
  }
}

// get Nft per id incluide name of user and category
const getNftId = async (id) => {
  try {
    const gonorrea = await nft.findOne({
      where: { id },
      attributes: ['id', 'title', 'description', 'img', 'price', 'isActive', 'isBanned', 'ownerId'],
      include: [{
        model: collection,
        attributes: ['name', 'description']
      }
      ]
    })
    const response = {
      id: gonorrea.id,
      title: gonorrea.title,
      description: gonorrea.description,
      img: gonorrea.img,
      price: gonorrea.price,
      isActive: gonorrea.isActive,
      isBanned: gonorrea.isBanned,
      collection: gonorrea.collection,
      ownerId: await findUser(gonorrea.ownerId)
    }
    return response
  } catch (error) {
    throw error.message
  }
}

// Delete NFT
const deleteAllNft = async () => {
  try {
    return await nft.destroy({
      where: {}
    })
  } catch (error) {
    throw error.message
  }
}

const statusNft = async (id, ownerId) => {
  try {
    const nftC = await nft.findByPk(id)
    const isActive = !nftC.isActive
    return await nftC.update({
      ownerId,
      isActive
    })
  } catch (error) {
    throw error.message
  }
}

const statusMultipleNft = async (ids, ownerId) => {
  try {
    for (let i = 0; i < ids.length; i++) {
      const nftC = await nft.findByPk(ids[i])
      const isActive = !nftC.isActive
      await nftC.update({
        ownerId,
        isActive
      })
    }
    return 'successfully changed'
  } catch (error) {
    throw error.message
  }
}

const getPerUserId = async (ownerId) => {
  try {
    return await nft.findAll(
      {
        where: {
          ownerId
        }
      }
    )
  } catch (error) {
    throw error.message
  }
}

module.exports = {
  createNFT,
  getNftId,
  statusNft,
  // addFavorite,
  // getFavoritesPerId,
  deleteAllNft,
  banANft,
  unbanANft,
  returnAllBanned,
  getPerUserId,
  statusMultipleNft
}
