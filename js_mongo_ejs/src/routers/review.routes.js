const express = require('express');
const addReview = require('../controllers/review.controller');
const router = express.Router();

router.post('/:id/reviews', addReview);

module.exports = router;
