const Review = require('../models/review.model');
const Book = require('../models/book.model');

const addReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, comment } = req.body;

        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const newReview = await Review.create({
            bookId: id,
            rating,
            comment
        });

        const reviews = await Review.find({
            bookId: id
        });

        const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
        book.averageRating = averageRating;
        await book.save();

        res.status(201).json({
            message: 'Review added successfully',
            review: newReview
        });
    } catch (error) {
        res.status(500).json({
            message: 'Review creation failed',
            error
        });
    }
};

module.exports = addReview;