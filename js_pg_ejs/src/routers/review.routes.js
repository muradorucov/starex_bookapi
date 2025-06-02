const express = require('express');
const router = express.Router();
const { createReview } = require('../controllers/review.controller');

router.post('/:id/reviews', createReview);

module.exports = router;
