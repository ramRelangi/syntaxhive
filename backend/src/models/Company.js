const { DataTypes } = require('sequelize');
const sequelize = require('../config'); 

const Company = sequelize.define('Company', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Company;