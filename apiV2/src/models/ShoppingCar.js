const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('shoppingCar', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  }, {
    timeStamps: false,
    createdAt: false,
    updatedAt: false
  })
}
