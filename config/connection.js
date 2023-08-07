const Sequelize = require('sequelize');
require('dotenv').config();

const dbConnection = process.env.PROD_DB_URL
  ? new Sequelize(process.env.PROD_DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
      }
    );

module.exports = dbConnection;