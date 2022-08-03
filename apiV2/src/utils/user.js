require('dotenv').config()
const { user } = require('../db.js')

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
  findUser
}
