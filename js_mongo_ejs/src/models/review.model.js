const mongoose = require('mongoose');
const reviewSchema = require('../schema/review.schema');

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
