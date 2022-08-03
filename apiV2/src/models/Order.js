const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('order', {
    total: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    state: {
      type: DataTypes.ENUM('approved', 'denclined', 'pending'),
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
