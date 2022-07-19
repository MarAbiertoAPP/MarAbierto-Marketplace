const { createPlace, findNameOrCreate, findName } = require('../dao/place.js')
const { createUser } = require('../dao/user.js')
const { NFTs } = require('./prechargue.js')
const axios = require('axios')
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
const users = [
  {
    name: 'nicolas',
    lastname: 'suarez',
    password: '2jmk3218',
    dni: '1049653787',
    email: '2jmk3218@gmail.com',
    phone: '3177833860',
    place: 'tunja'
  },
  {
    name: 'rafael',
    lastname: 'quiroga',
    password: '2jmk3218',
    dni: '123',
    email: 'correo1@gmail.com',
    phone: '12345',
    place: 'tunja'
  },
  {
    name: 'jesus',
    lastname: 'arenas',
    password: '2jmk3218',
    dni: '123',
    email: 'correo2@gmail.com',
    phone: '12345',
    place: 'tunja'
  },
  {
    name: 'gustavo',
    lastname: 'foscarini',
    password: '2jmk3218',
    dni: '123',
    email: 'correo3@gmail.com',
    phone: '12345',
    place: 'tunja'
  },
  {
    name: 'julian',
    lastname: 'soto',
    password: '2jmk3218',
    dni: '123',
    email: 'correo4@gmail.com',
    phone: '12345',
    place: 'tunja'
  },
  {
    name: 'marcelo',
    lastname: 'godoy',
    password: '2jmk3218',
    dni: '123',
    email: 'correo5@gmail.com',
    phone: '12345',
    place: 'tunja'
  },
  {
    name: 'tiago',
    lastname: 'cornalo',
    password: '2jmk3218',
    dni: '123',
    email: 'correo6@gmail.com',
    phone: '12345',
    place: 'tunja'
  },
  {
    name: 'joaquin',
    lastname: 'muñoz',
    password: '2jmk3218',
    dni: '123',
    email: 'correo7@gmail.com',
    phone: '12345',
    place: 'tunja'
  }
]
const chargue = async () => {
  try {
    // Crear lugares
    const col = await createPlace('colombia', null)
    const arg = await createPlace('argentina', null)
    let chargeCOL = await axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json') // deparamentos y ciudades
    chargeCOL = chargeCOL.data
    for (let i = 0; i < chargeCOL.length; i++) {
      await findNameOrCreate(chargeCOL[i].departamento, col.dataValues.id) // departamentos
    }
    for (let i = 0; i < chargeCOL.length; i++) {
      const e = await findName(chargeCOL[i].departamento)
      await findNameOrCreate(chargeCOL[i].municipio, e.dataValues.id) // ciudad
    }
    let chargeArg = await axios.get('https://apis.datos.gob.ar/georef/api/provincias') // provicias
    chargeArg = chargeArg.data.provincias
    let chargeArgM = ''
    let ele = '' // municipios
    for (let i = 0; i < chargeArg.length; i++) {
      ele = await findNameOrCreate(chargeArg[i].nombre, arg.dataValues.id) // crea provicia
      chargeArgM = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${chargeArg[i].id}&campos=nombre&max=428`) // crea ciudades de provicias
      chargeArgM = chargeArgM.data.municipios
      for (let j = 0; j < chargeArgM.length; j++) {
        await findNameOrCreate(chargeArgM[j].nombre, ele[0].dataValues.id)
      }
    }
    const arrUsersID = []
    for (let i = 0; i < users.length; i++) {
      const { name, lastname, password, dni, profilePicture, email, phone, place } = users[i]
      const idUser = await createUser(name, lastname, password, dni, profilePicture, email, phone, 'N', place)
      arrUsersID.push(idUser.dataValues.id)
    }

    for (let i = 0; i < NFTs.length; i++) {
      const rand = Math.floor(Math.random() * arrUsersID.length)
      const rValue = arrUsersID[rand]
      const { title, description, img: path, price, category } = NFTs[i]
      const catId = await createCat(category)
      await createNFT(title, description, path, price, catId[0].dataValues.id, rValue)
    }
    console.log('sucessfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  chargue
}
