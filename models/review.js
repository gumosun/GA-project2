const db = require('../db/config');

const Review = {};

Review.findAll = () => {
  return db.query(`SELECT * FROM reviews`); 
};

Review.findById = (id) => {
  return db.one (`
    SELECT *
    FROM reviews
    WHERE id = $1
  `, [id]);
};

Review.findByName = (res_name) => {
  return db.oneOrNone(`
    SELECT *
    FROM reviews
    WHERE res_name = $1
  `, [res_name]);
};

Review.create = (review, userid) => {
  return db.one(`
    INSERT INTO reviews
    (res_name, rating, memo, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [review.res_name, review.rating, review.memo, userid]);
};

Review.destroy = (id) => {
  return db.none(`
  DELETE FROM reviews
  WHERE id = $1`, [id]);
};

Review.update = (review, id) => {
  return db.one(`
    UPDATE reviews SET
    res_name = $1,
    rating = $2,
    memo = $3
    WHERE id = $4
    RETURNING *
  `, [review.res_name, review.rating, review.memo, id]);
};

module.exports = Review;