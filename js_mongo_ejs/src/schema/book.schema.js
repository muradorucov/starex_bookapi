const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        averageRating: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true });

module.exports = bookSchema;
