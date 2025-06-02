require('dotenv').config();

const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_PASS: process.env.MONGO_PASS
}

module.exports = config;
