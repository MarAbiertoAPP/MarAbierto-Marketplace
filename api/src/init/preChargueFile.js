const { NFTs } = require('./prechargue.js')
const { Collections } = require('./prechargeCollections.js')
const { findNameOrCreate: createCat } = require('../helpers/category.js')
const { createNFT, deleteAllNft } = require('../helpers/nft.js')
const { createCollection, getCollection, deleteAllCollect } = require('../helpers/collection.js')
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
const users = ['4e3e9089-b42a-4ee0-841c-a4ccdd253dd7'] // 24d140e1-9da7-48bb-85b6-5ac2a535d5d3

const chargue = async () => {
  try {
    console.log(await deleteAllNft())
    console.log(await deleteAllCollect())
    for (let i = 0; i < Collections.length; i++) {
      const rand = Math.floor(Math.random() * users.length)
      const rValue = users[rand]
      const { name, category, frontPage, mini, description } = Collections[i]
      const catId = await createCat(category)
      let collectionId = await getCollection(name)
      if (!collectionId) {
        console.log(catId[0].dataValues.id + ' ' + i)
        collectionId = await createCollection(rValue, name, catId[0].dataValues.id, frontPage, mini, description)
      }
    }
    for (let i = 0; i < NFTs.length; i++) {
      const { title, description, img: path, price, collection } = NFTs[i]
      let collectionId = await getCollection(collection)
      if (collectionId) {
        collectionId = collectionId.dataValues.id
      }

      await createNFT(title, description, path, price, collectionId)
    }
    console.log('sucessfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  chargue
}
