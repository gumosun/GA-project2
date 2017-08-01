const Review = require('../models/review');

const reviewController = {};

reviewController.index = (req, res) => {
  Todo.findAll(req.user.id)
    .then(review => {
      res.render('review/review-index', {
        data: review,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


module.exports = reviewController;