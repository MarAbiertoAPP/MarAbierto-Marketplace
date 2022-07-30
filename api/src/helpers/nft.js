const { nft, favorite } = require('../db.js')
const { findUser } = require('../helpers/user')
// const { Sequelize } = require('sequelize')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * Create nft
 */
const createNFT = async (title, description, path, price, collectionId) => {
  try {
    return await nft.create({
      title: title.toLowerCase(),
      description,
      path,
      price,
      collectionId
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
      where: { id }
    })
  } catch (error) {
    throw error.message
  }
}
/**
 * Add nft favorites
 */
const addFavorite = async (idUser, idNft) => {
  try {
    const userS = await findUser(idUser)
    const nftS = await getNftId(idNft)
    if (userS && nftS) {
      return await favorite.create({
        userId: idUser,
        nftId: idNft
      })
    }
  } catch (error) {
    throw error.message
  }
}

const getFavoritesPerId = async (iduser) => {
  try {
    let arry = await favorite.findAll({
      where: { userId: iduser },
      attributes: ['nftId']
    })
    arry = arry.map(e => e.dataValues.nftId)
    const arrayAux = []
    for (let i = 0; i < arry.length; i++) {
      arrayAux.push(await getNftId(arry[i]))
    }
    return arrayAux
  } catch (error) {
    throw error.message
  }
}

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
  addFavorite,
  getFavoritesPerId,
  deleteAllNft
}
