const { user } = require('../db.js')
const { findName } = require('./place.js')
const bcrypt = require('bcrypt')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 * Crate user in database.
 */

const createUser = async (
  name,
  lastname,
  password,
  dni,
  profilePicture,
  email,
  phone,
  typeUser,
  placeName
) => {
  try {
    const place = await findName(placeName)
    const passwordE = await bcrypt.hash(password, 10)
    return await user.create({
      name: eliminarDiacriticos(name).toUpperCase(),
      lastname: eliminarDiacriticos(lastname).toUpperCase(),
      password: passwordE,
      dni,
      profile_picture: profilePicture,
      email,
      phone,
      typeUser,
      placeId: place.dataValues.id
    })
  } catch (error) {
    return error
  }
}

/**
 * find User per email
 */

const searchUser = async (email) => {
  try {
    return await user.findOne({
      where: { email }
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
  findUser
}
