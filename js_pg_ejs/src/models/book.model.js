const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    averageRating: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
});

module.exports = Book;
