const { nft, collection /* favorite */ } = require('../db.js')
const { getCollectionIdByName } = require('./collection.js')
// const { findUser } = require('../utils/user')

// Create nft
const createNFT = async (title, description, img, price, collectionName, id) => {
  try {
    const collection = await getCollectionIdByName(collectionName)
    const collectionId = collection.id
    return await nft.create({
      title: title.toLowerCase(),
      description,
      img,
      price,
      collectionId,
      id
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
      attributes: ['id', 'title', 'description', 'img', 'price', 'isActive'],
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

module.exports = {
  createNFT,
  getNftId,
  // addFavorite,
  // getFavoritesPerId,
  deleteAllNft
}
