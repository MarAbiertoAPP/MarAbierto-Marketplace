require('dotenv').config()
const { Sequelize, Op } = require('sequelize')
const modelUser = require('./models/User.js')
const modelNft = require('./models/Nft.js')
const modelCategory = require('./models/Category')
const modelOder = require('./models/Order.js')
const modelFavorite = require('./models/Favorite')
const modelLike = require('./models/Like.js')
const modelShoppingCar = require('./models/ShoppingCar.js')
const modelCollection = require('./models/Collection.js')
const modelReport = require('./models/Report.js')

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
// process.env.DATABASE_URL ||
const sequelize = new Sequelize(
  process.env.DATABASE_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/marketplace`,
  {
    logging: false,
    /* native: false */
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)
/**
 * Create models in database
 */
modelUser(sequelize)
modelCollection(sequelize)
modelCategory(sequelize)
modelNft(sequelize)
modelOder(sequelize)
modelFavorite(sequelize)
modelLike(sequelize)
modelShoppingCar(sequelize)
modelReport(sequelize)

/**
 * create relationship
 */
const {
  user,
  collection,
  category,
  nft,
  order,
  favorite,
  like,
  shoppingCar
  // report
} = sequelize.models

category.hasMany(collection)
collection.belongsTo(category)

// User creator
user.hasMany(collection)
collection.belongsTo(user)

collection.hasMany(nft)
nft.belongsTo(collection)

user.belongsToMany(nft, { through: shoppingCar })
nft.belongsToMany(user, { through: shoppingCar })

user.belongsToMany(nft, { through: favorite })
nft.belongsToMany(user, { through: favorite })

user.belongsToMany(nft, { through: like })
nft.belongsToMany(user, { through: like })

user.belongsToMany(nft, { through: order })
nft.belongsToMany(user, { through: order })

module.exports = {
  ...sequelize.models,
  conn: sequelize,
  Op
}
