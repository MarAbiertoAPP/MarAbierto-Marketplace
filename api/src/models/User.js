const { DataTypes } = require('sequelize');
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize 
 */
module.exports = (sequelize) => {
  sequelize.define('user', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    typeUser: {
      type: DataTypes.ENUM('N', 'SU'),
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    marcoins: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false,
      validate: {
        notNull: true, 
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {timeStamps: false,
    createdAt: false,
    updatedAt: false});
};