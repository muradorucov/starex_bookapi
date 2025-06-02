require('dotenv').config();

const config = {
    port: process.env.PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    ssl: process.env.DB_SSL,
}

module.exports = config;
