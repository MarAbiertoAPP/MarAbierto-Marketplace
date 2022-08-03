const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('category', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
