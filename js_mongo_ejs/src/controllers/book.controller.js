const Book = require('../models/book.model');
const Review = require('../models/review.model');

const createBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        const newBook = await Book.create({ title, author });

        res.status(201).json({
            message: 'Book created successfully',
            book: newBook
        });
    } catch (error) {
        res.status(500).json({ message: 'Book creation failed', error });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const { rating } = req.query;
        const filter = rating ? {
            averageRating: {
                $gte: Number(rating)
            }
        } : {};
        const books = await Book.find(filter);
        res.status(200).json({
            message: 'Books retrieved successfully',
            books
        });
    } catch (error) {
        res.status(500).json({ message: 'Book retrieval failed', error });
    }
};

const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const reviews = await Review.find({ bookId: id });

        res.status(200).json({
            message: 'Book retrieved successfully',
            book,
            reviews
        });
    } catch (error) {
        res.status(500).json({ message: 'Book retrieval failed', error });
    }
};

module.exports = {
    createBook,
    getAllBooks,
    getBookById
};