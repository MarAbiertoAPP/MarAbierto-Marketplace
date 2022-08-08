const { nft, collection /* favorite */ } = require('../db.js')
const { getCollectionIdByName } = require('./collection.js')
// const { findUser } = require('../utils/user')

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

// get Nft per id incluide name of user and category
const getNftId = async (id) => {
  try {
    return await nft.findOne({
      where: { id },
      attributes: ['id', 'title', 'description', 'img', 'price', 'isActive', 'isBanned'],
      include: [{
        model: collection,
        attributes: ['name', 'description']
      }]
    })
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

module.exports = {
  createNFT,
  getNftId,
  statusNft,
  // addFavorite,
  // getFavoritesPerId,
  deleteAllNft
}
