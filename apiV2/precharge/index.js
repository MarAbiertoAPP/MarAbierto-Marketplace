const Categories = require('./category')
const { createCategory, findName } = require('../src/utils/category')
const User = require('./user')
const { createUser, allUserId } = require('../src/utils/user')
const Collections = require('./collections')
const { createCollection } = require('../src/utils/collection')
const NFTs = require('./nft')
const { createNFT } = require('../src/utils/nft')

/*
this method reads apis and preloads the information is
temporary while the database is just filled and the "force" becomes false.
DELETE ENTIRE INIT FOLDER BEFORE DEPLOYING
*/

const chargue = async () => {
  try {
    // Charge all the categories
    for (const category of Categories) {
      await createCategory(category.name)
    }
    // Get an array of all categories ID

    // Charge all users
    for (const user of User) {
      await createUser(user.name, user.nickname, user.picture, user.email, user.typeUser)
    }

    // Get an array of all user's ID
    const allUsersId = await allUserId()

    // Charge all collections
    for (const c of Collections) {
      const userIndex = rndNumber(allUsersId.length)
      const cat = await findName(c.category)

      await createCollection(
        allUsersId[userIndex].id,
        c.name,
        cat.id,
        c.frontPage,
        c.mini,
        c.description)
    }

    // Charge all NFT's
    for (const nft of NFTs) {
      await createNFT(
        nft.title,
        nft.description,
        nft.img,
        nft.price,
        nft.collection
      )
    }

    console.log('sucessfully')
  } catch (error) {
    console.log(error)
  }
}

const rndNumber = (max) => {
  return Math.floor(Math.random() * max)
}

module.exports = chargue
