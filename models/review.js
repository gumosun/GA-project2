const db = require('../db/config');

const Review = {};

Review.findAll = () => {
  return db.query(`SELECT * FROM reviews`); 
};

module.exports = Review;