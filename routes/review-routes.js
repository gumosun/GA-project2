const express = require('express');
const reviewRoutes = express.Router();

const reviewController = require('../controllers/review-controller');
const reviewHelpers = require('../services/review-helper');
const authHelpers = require('../services/auth/auth-helpers');


reviewRoutes.get('/', (req, res) => {
  res.render('reviews/review-main');
});
reviewRoutes.get('/search', (req, res) => {
  res.render('reviews/review-search');
});
reviewRoutes.post('/', authHelpers.loginRequired, reviewController.create);
reviewRoutes.post('/search', reviewHelpers.getGoogleByName , reviewController.show);
reviewRoutes.get('/add', (req, res) => {
  res.render('reviews/review-add');
});
reviewRoutes.get('/history', authHelpers.loginRequired, reviewController.index);
reviewRoutes.get('/:id/edit', authHelpers.loginRequired, reviewController.edit);
reviewRoutes.put('/:id', authHelpers.loginRequired,reviewController.update);
reviewRoutes.delete('/:id', authHelpers.loginRequired, reviewController.delete);


module.exports = reviewRoutes;