const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('like', {
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
