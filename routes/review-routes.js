const express = require('express');
const reviewRoutes = express.Router();

const reviewController = require('../controllers/review-controller');

reviewRoutes.get('/', reviewController.index);
reviewRoutes.get('/search', (req, res) => {
  res.render('reviews/review-search');
});


module.exports = reviewRoutes;