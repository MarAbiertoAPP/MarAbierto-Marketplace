require('dotenv').config()
const { Sequelize } = require('sequelize')
const modelPlace = require('./models/Place.js')
const modelUser = require('./models/User.js')
const modelNft = require('./models/Nft.js')
const modelCategory = require('./models/Category')
const modelOder = require('./models/Order.js')
const modelFavorite = require('./models/Favorite.js')
const modelLike = require('./models/Like.js')
const modelShoppingCar = require('./models/ShoppingCar.js')
const modelTag = require('./models/Tag.js')

/**
 * @author Nicolas Alejandro Suarez
 */
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/marketplace`,
  {
    logging: false,
    native: false
  }
)
/**
 * Create models in database
 */
modelPlace(sequelize)
modelUser(sequelize)
modelCategory(sequelize)
modelTag(sequelize)
modelNft(sequelize)
modelOder(sequelize)
modelFavorite(sequelize)
modelLike(sequelize)
modelShoppingCar(sequelize)

/**
 * create relationship
 */
const {
  place,
  user,
  category,
  tag,
  nft,
  order,
  favorite,
  like,
  shoppingCar
} = sequelize.models

place.hasMany(place, { foreignKey: 'located' })
user.belongsTo(place)
place.hasMany(user)

nft.belongsTo(category)
category.hasMany(nft)

nft.belongsToMany(tag, { through: 'NFT_TAG' })
tag.belongsToMany(nft, { through: 'NFT_TAG' })

user.hasMany(nft)
nft.belongsTo(user)

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
  conn: sequelize
}
