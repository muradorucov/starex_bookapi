const mongoose = require('mongoose');
const config = require('../config');
const url = config.MONGO_URI.replace('<password>', config.MONGO_PASS);

const mongooseConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongooseConnection;
