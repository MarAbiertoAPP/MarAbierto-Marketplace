const { DataTypes } = require('sequelize')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
module.exports = (sequelize) => {
  sequelize.define('favorite', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    timeStamps: false,
    createdAt: false,
    updatedAt: false
  })
}
