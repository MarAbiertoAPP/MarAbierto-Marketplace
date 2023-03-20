const { favorite } = require('../db.js')
const { QueryTypes } = require('sequelize')
const { conn } = require('../db')

/**
 * post intem to car shopping
 * @param {serial} nftId
 * @param {serial} userId
 * @returns mensagge estatus
 */
const postToFavorite = async (nftId, userId) => {
  try {
    return await favorite.create({
      nftId,
      userId,
      date: Date.now()
    })
  } catch (error) {
    throw error.message
  }
}
/**
 * delete elemento to car
 * @param {*} nftId
 * @param {*} userId
 * @returns
 */
const deleteFavorite = async (nftId, userId) => {
  try {
    return await favorite.destroy({
      where: {
        nftId,
        userId
      }
    })
  } catch (error) {
    throw error.message
  }
}

/**
 *get Favorite by user id
 * @param {*} userId
 */
const getFavoriteByUserID = async (userId) => {
  try {
    return await conn.query(`SELECT nfts.id, nfts.img, nfts.price, nfts.title FROM nfts JOIN "favorites" ON "favorites"."nftId" =  nfts.id JOIN users ON users.id = "favorites"."userId" WHERE  "favorites"."userId" = '${userId}'`, { type: QueryTypes.SELECT })
  } catch (error) {
    throw error.message
  }
}
module.exports = {
  getFavoriteByUserID,
  deleteFavorite,
  postToFavorite
}
