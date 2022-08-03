const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    nickname: {
      type: DataTypes.STRING
    },
    profile_picture: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.dribbble.com/users/1165166/screenshots/3394646/media/d7adc8caca2611cd33ea23061df411fc.png'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    typeUser: {
      type: DataTypes.ENUM('N', 'SU'),
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    marcoins: {
      type: DataTypes.DECIMAL(20, 2),
      defaultValue: 0
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
