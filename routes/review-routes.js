const express = require('express');
const reviewRoutes = express.Router();

const reviewController = require('../controllers/review-controller');

reviewRoutes.get('/', reviewController.index);



module.exports = reviewRoutes;