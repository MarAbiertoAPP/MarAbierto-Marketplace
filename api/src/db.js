require("dotenv").config();
const { Sequelize } = require("sequelize");
const modelPlace = require("./models/place.js");
const modelUser = require("./models/user.js");
const modelNtf = require("./models/ntf.js");
const modelCategory = require("./models/category");
const modelOder = require("./models/order.js");
const modelFavorite = require("./models/favorite.js");
const modelLike = require("./models/like.js");
const modelShoppinCar = require("./models/shopping_car.js");
const modelTag = require("./models/tag.js");

/**
 * @author Nicolas Alejandro Suarez
 */
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/marketplace`,
  {
    logging: false,
    native: false,
  }
);
/**
 * Create models in database
 */
modelPlace(sequelize);
modelUser(sequelize);
modelCategory(sequelize); 
modelTag(sequelize);
modelNtf(sequelize);
modelOder(sequelize);
modelFavorite(sequelize);
modelLike(sequelize);
modelShoppinCar(sequelize);


/**
 * create relationship
 */
const {
  place,
  user,
  category,
  tag,
  ntf,
  order,
  favorite,
  like,
  shopping_car,
} = sequelize.models;

place.hasMany(place, { foreignKey: "located" });
user.belongsTo(place);
place.hasMany(user);

ntf.belongsTo(category);
category.hasMany(ntf);

ntf.belongsToMany(tag, { through: "NTF_TAG" });
tag.belongsToMany(ntf, { through: "NTF_TAG" });

user.hasMany(ntf);
ntf.belongsTo(user);

user.belongsToMany(ntf, { through: shopping_car });
ntf.belongsToMany(user, { through: shopping_car});

user.belongsToMany(ntf, { through: favorite});
ntf.belongsToMany(user, { through: favorite});

user.belongsToMany(ntf, { through: like });
ntf.belongsToMany(user, { through: like});

user.belongsToMany(ntf, { through: order });
ntf.belongsToMany(user, { through: order });



module.exports = {
  ...sequelize.models,
  conn: sequelize,
};