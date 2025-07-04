const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Student = sequelize.define('Student', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  registration: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'students',
  timestamps: false,
});

module.exports = Student;
