const { Sequelize } = require('sequelize');
const config = require('../config');
require('dotenv').config();

const sequelize = new Sequelize(
  config.name,
  config.user,
  config.password,
  {
    host: config.host,
    port: config.db_port,
    dialect: 'postgres',
    dialectOptions: {
      ssl: config.ssl === 'true' ? { require: true, rejectUnauthorized: false } : false
    },
    logging: false
  }
);

module.exports = sequelize;
