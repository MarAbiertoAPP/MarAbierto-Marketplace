require('dotenv').config()
const { user } = require('../db.js')
const chargue = require('../init/preChargueFile')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 * Crate user in database.
 */

const createUser = async (
  name,
  picture,
  nickname,
  email,
  typeUser
) => {
  try {
    /* const saltRounds = 10
    const passwordE = await bcrypt.hash(password, saltRounds) */
    await chargue()
    const newUser = await user.create({
      name: eliminarDiacriticos(name),
      lastname: nickname,
      profile_picture: picture,
      email,
      typeUser
    })
    console.log(newUser)
    return newUser
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
