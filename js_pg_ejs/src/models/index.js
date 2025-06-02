const Book = require("./book.model");
const Review = require("./review.model");


Book.hasMany(Review, {
    foreignKey: 'bookId',
    onDelete: 'CASCADE'
});
Review.belongsTo(Book, {
    foreignKey: 'bookId'
});

module.exports = {
    Book,
    Review
};