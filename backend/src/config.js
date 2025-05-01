const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbURL = process.env.DATABASE_URL;

const sequelize = new Sequelize(dbURL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DATABASE_SSL === 'true' ? {
        require: true,
        rejectUnauthorized: false
      } : false,
    },
  });



module.exports = sequelize;
