const { nft, user, category } = require('../db.js')
const { Sequelize } = require('sequelize')
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
/**
 * get Nft per id incluide name of user and category
 * @param {id uiid4} id
 * @returns
 */
const getNftId = async (id) => {
  try {
    return await nft.findOne({
      where: { id },
      include: [{
        model: user,
        attributes: []
      },
      {
        model: category,
        attributes: []
      }
      ],
      attributes: [
        'id', 'title', 'description', 'path', 'price', 'isActive',
        [Sequelize.literal('"user"."name"'), 'User'],
        [Sequelize.literal('"category"."name"'), 'Category']
      ]
    })
  } catch (error) {
    throw error.message
  }
}

module.exports = {
  createNFT,
  getNftId
}
