const { shoppingCar, user } = require('../db.js')

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
 *
 * @param {*} userId
 */
const getCarByUserID = async (userId) => {
  try {
    const userCar = await user.findByPk(userId)
    return await userCar.getNfts({})
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
