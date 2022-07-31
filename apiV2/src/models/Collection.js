const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('collection', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    frontPage: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.dribbble.com/users/1165166/screenshots/3394646/media/d7adc8caca2611cd33ea23061df411fc.png'
    },
    mini: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.dribbble.com/users/1165166/screenshots/3394646/media/d7adc8caca2611cd33ea23061df411fc.png'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true
      }
    },
    description: {
      type: DataTypes.TEXT,
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
