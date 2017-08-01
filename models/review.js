const db = require('../db/config');

const Review = {};

Review.findAll = (id) => {
  return db.query(`
    SELECT * FROM reviews
    WHERE user_id = $1
  `, [id]);
};

module.exports = Review;