const db = require('../db/config');

const Review = {};

Review.findAll = () => {
  return db.query(`SELECT * FROM reviews`); 
};

Review.findByName = (res_name) => {
  return db.oneOrNone(`
    SELECT *
    FROM reviews
    WHERE res_name = $1
  `, [res_name]);
};

Review.create = (review) => {
  return db.one(`
    INSERT INTO reviews
    (res_name, rating, memo, user_id)
    VALUES ($1, $2, $3, NULL)
    RETURNING *
  `, [review.res_name, review.rating, review.memo, review.user_id]);
};

Review.destroy = (id) => {
  return db.none(`
  DELETE FROM reviews
  WHERE id = $1`, [id]);
};

module.exports = Review;