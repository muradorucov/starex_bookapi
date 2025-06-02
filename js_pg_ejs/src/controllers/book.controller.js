const { Book, Review } = require('../models');

const createBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        const book = await Book.create({
            title,
            author
        });
        res.status(201).json({
            message: 'Book created successfully',
            book
        });
    } catch (err) {
        res.status(500).json({
            message: 'Book creation failed',
            error: err
        });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const { rating } = req.query;
        const condition = rating ? {
            where: {
                averageRating: {
                    [require('sequelize').Op.gte]: rating
                }
            }
        } : {};
        const books = await Book.findAll(condition);
        res.status(200).json({
            message: 'Books fetched successfully',
            books
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching books',
            error: err
        });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id, { include: Review });
        if (!book) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }
        res.status(200).json({
            message: 'Book fetched successfully',
            book
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching book',
            error: err
        });
    }
};


module.exports = {
    createBook,
    getAllBooks,
    getBookById
};