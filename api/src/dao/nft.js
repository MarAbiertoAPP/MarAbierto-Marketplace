const { nft } = require('../db.js')

/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * Create nft
 */
const createNFT = async (title, description, path, price, categoryId, userId) => {
  try {
    return await nft.create({
      title: title.toUpperCase(),
      description,
      path,
      price,
      userId,
      categoryId
    })
  } catch (error) {
    throw error.message
  }
}

module.exports = {
  createNFT
}
