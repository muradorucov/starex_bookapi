const { Book, Review } = require('../models');

const createReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const bookId = req.params.id;

        const book = await Book.findByPk(bookId);
        if (!book) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        const review = await Review.create({
            rating,
            comment,
            bookId
        });

        const reviews = await Review.findAll({
            where: { bookId }
        });
        const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

        await book.update({ averageRating: avg });

        res.status(201).json({
            message: 'Review created successfully',
            review
        });
    } catch (err) {
        res.status(500).json({
            message: 'Review creation failed',
            error: err
        });
    }
};


module.exports = {
    createReview
};