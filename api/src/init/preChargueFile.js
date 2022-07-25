/* const { createUser } = require('../dao/user.js') */
const { NFTs } = require('./prechargue.js')
const { findNameOrCreate: createCat } = require('../dao/category.js')
const { createNFT } = require('../dao/nft.js')
// https://www.datos.gov.co/resource/xdk5-pm3f.json
// https://apis.datos.gob.ar/georef/api/provincias
// https://apis.datos.gob.ar/georef/api/municipios?provincia=14&campos=nombre&max=428

/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */

/**
 * this method reads apis and preloads the information is
 * temporary while the database is just filled and the "force" becomes false.
 * DELETE ENTIRE INIT FOLDER BEFORE DEPLOYING
 */
/* const users = [
  {
    name: 'nicolas',
    lastname: 'suarez',
    password: '2jmk3218',
    dni: '1049653787',
    email: '2jmk3@gmail.com',
    phone: '3177833860'
  },
  {
    name: 'rafael',
    lastname: 'quiroga',
    password: '2jmk3218',
    dni: '123',
    email: 'correo1@gmail.com',
    phone: '12345'
  },
  {
    name: 'jesus',
    lastname: 'arenas',
    password: '2jmk3218',
    dni: '123',
    email: 'correo2@gmail.com',
    phone: '12345'
  },
  {
    name: 'gustavo',
    lastname: 'foscarini',
    password: '2jmk3218',
    dni: '123',
    email: 'correo3@gmail.com',
    phone: '12345'
  },
  {
    name: 'julian',
    lastname: 'soto',
    password: '2jmk3218',
    dni: '123',
    email: 'correo4@gmail.com',
    phone: '12345'
  },
  {
    name: 'marcelo',
    lastname: 'godoy',
    password: '2jmk3218',
    dni: '123',
    email: 'correo5@gmail.com',
    phone: '12345'
  },
  {
    name: 'tiago',
    lastname: 'cornalo',
    password: '2jmk3218',
    dni: '123',
    email: 'correo6@gmail.com',
    phone: '12345'
  },
  {
    name: 'joaquin',
    lastname: 'muñoz',
    password: '2jmk3218',
    dni: '123',
    email: 'correo7@gmail.com',
    phone: '12345'
  }
] */
const chargue = async () => {
  try {
    /* const arrUsersID = []
    for (let i = 0; i < users.length; i++) {
      const { name, lastname, password, dni, profilePicture, email, phone } = users[i]
      const idUser = await createUser(name, lastname, password, dni, profilePicture, email, phone, 'N')
      arrUsersID.push(idUser.dataValues.id)
    } */

    for (let i = 0; i < NFTs.length; i++) {
    /*   const rand = Math.floor(Math.random() * arrUsersID.length)
      const rValue = arrUsersID[rand] */
      const { title, description, img: path, price, category } = NFTs[i]
      const catId = await createCat(category)
      await createNFT(title, description, path, price, catId[0].dataValues.id /* rValue */)
    }
    console.log('sucessfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  chargue
}
