const Review = require('../models/review');

const reviewController = {};

reviewController.index = (req, res) => {
  Review.findAll()
    .then(review => {
      res.render('reviews/review-main', {
        data: review,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


module.exports = reviewController;