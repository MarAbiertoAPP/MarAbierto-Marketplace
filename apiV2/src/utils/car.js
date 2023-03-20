const { shoppingCar } = require('../db.js')
const { QueryTypes } = require('sequelize')
const { conn } = require('../db')

/**
 * post intem to car shopping
 * @param {serial} nftId
 * @param {serial} userId
 * @returns mensagge estatus
 */
const postToCar = async (nftId, userId) => {
  try {
    return await shoppingCar.create({
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
const deleteTocar = async (nftId, userId) => {
  try {
    return await shoppingCar.destroy({
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
 * Delete total car per user
 * @param {*} userId
 * @returns
 */
const deleteTotalCar = async (userId) => {
  try {
    return await shoppingCar.destroy({
      where: {
        userId
      }
    })
  } catch (error) {
    throw error.message
  }
}
/**
 *get cart by user id
 * @param {*} userId
 */
const getCarByUserID = async (userId) => {
  try {
    return await conn.query(`SELECT nfts.id, nfts.img, nfts.price, nfts.title FROM nfts JOIN "shoppingCars" ON "shoppingCars"."nftId" =  nfts.id JOIN users ON users.id = "shoppingCars"."userId" WHERE  "shoppingCars"."userId" = '${userId}'`, { type: QueryTypes.SELECT })
  } catch (error) {
    throw error.message
  }
}
module.exports = {
  postToCar,
  deleteTocar,
  deleteTotalCar,
  getCarByUserID
}
