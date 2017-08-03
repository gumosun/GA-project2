const express = require('express');
const reviewRoutes = express.Router();

const reviewController = require('../controllers/review-controller');


reviewRoutes.get('/', (req, res) => {
  res.render('reviews/review-main');
});
reviewRoutes.get('/search', (req, res) => {
  res.render('reviews/review-search');
});
reviewRoutes.post('/', reviewController.create);
reviewRoutes.post('/search', reviewController.show);
reviewRoutes.get('/add', (req, res) => {
  res.render('reviews/review-add');
});
reviewRoutes.get('/history', reviewController.index);
reviewRoutes.delete('/:id', reviewController.delete);

module.exports = reviewRoutes;