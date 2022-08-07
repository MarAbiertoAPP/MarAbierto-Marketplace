const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('bannedUser', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },

    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    }

  }, {
    timeStamps: false,
    createdAt: true,
    updatedAt: false
  })
}
