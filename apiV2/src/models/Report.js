const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('report', {

    target: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },

    type: {
      type: DataTypes.ENUM('user', 'nft', 'collection'),
      allowNull: false,
      validate: {
        notNull: true
      }
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    }

  }, {
    timeStamps: false,
    createdAt: true,
    updatedAt: false
  })
}
