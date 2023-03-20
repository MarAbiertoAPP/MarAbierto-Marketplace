require('dotenv').config()
const { user, Op } = require('../db.js')

const createUser = async (name, nickname, picture, email, typeUser) => {
  try {
    const newUser = await user.create({
      name: eliminarDiacriticos(name),
      nickname,
      profile_picture: picture,
      email,
      typeUser
    })
    return newUser
  } catch (error) {
    return error
  }
}

const banAnUser = async (id) => {
  try {
    return await user.update({ isBanned: true }, {
      where: {
        id
      }
    })
  } catch (error) {
    console.log(error)
    throw error.message
  }
}

const unbanAnUser = async (id) => {
  try {
    return await user.update({ isBanned: false }, {
      where: {
        id
      }
    })
  } catch (error) {
    console.log(error)
    throw error.message
  }
}

const getAllBannedUsers = async (name, id) => {
  try {
    return await user.findAll({
      where: {
        isBanned: true
      }
    })
  } catch (error) {
    console.log(error)
    throw error.message
  }
}

// find User per email
const searchUser = async (email) => {
  try {
    return await user.findOne({
      where: { email }
    })
  } catch (error) {
    return error
  }
}

const searchByName = async (nickname) => {
  try {
    return await user.findAll({
      where: {
        nickname: {
          [Op.iLike]: `%${nickname}%`
        }
      }
    })
  } catch (error) {
    return error
  }
}

// Get all userId
const allUserId = async () => {
  try {
    return await user.findAll({
      attributes: ['id'],
      raw: true,
      nest: true
    })
  } catch (error) {
    return error
  }
}

async function findUser (id) {
  try {
    return await user.findOne({
      where: { id }
    })
  } catch (err) {
    return err
  }
}

function eliminarDiacriticos (texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

module.exports = {
  createUser,
  searchUser,
  allUserId,
  findUser,
  searchByName,
  banAnUser,
  unbanAnUser,
  getAllBannedUsers
}
