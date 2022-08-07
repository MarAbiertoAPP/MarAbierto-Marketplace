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
      defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXEEyrd5qQU0aUKbbmjj45VwjWUMkMHOzTbd3Xc0&s'
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
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mi non odio viverra, a volutpat ipsum placerat. Vestibulum tristique sapien nibh, eu semper justo tincidunt eget. Vestibulum id mauris tellus. Morbi feugiat libero feugiat, auctor massa vitae, congue augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    isBanned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timeStamps: false,
    createdAt: true,
    updatedAt: false
  })
}
