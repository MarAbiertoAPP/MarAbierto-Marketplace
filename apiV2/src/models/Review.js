const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('review', {

    id: {
      type: DataTypes.STRING,
      defaultValue: 'unknown',
      allowNull: false,
      primaryKey: true
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  })
}
