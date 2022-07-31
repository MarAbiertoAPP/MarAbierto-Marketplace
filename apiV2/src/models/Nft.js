const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('nft', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    timeStamps: false,
    createdAt: false,
    updatedAt: false
  })
}
