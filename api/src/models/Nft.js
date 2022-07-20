const { DataTypes } = require('sequelize')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
module.exports = (sequelize) => {
  sequelize.define('nft', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    path: {
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
