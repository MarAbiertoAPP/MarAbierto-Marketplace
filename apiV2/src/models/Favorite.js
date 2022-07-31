const { DataTypes } = require('sequelize')

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
