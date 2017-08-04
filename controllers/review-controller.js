const Review = require('../models/review');

const reviewController = {};

reviewController.index = (req, res) => {
  Review.findAll()
    .then(review => {
      res.render('reviews/review-history', {
        data: review,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

reviewController.show = (req, res) => {
  Review.findByName(req.body.res_name)
    .then(review => {
      console.log(review);
      res.render('reviews/review-main', {
      data: review, 
      google: res.locals.googleData,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

reviewController.create = (req, res) => {
  Review.create({
    res_name: req.body.res_name,
    rating: req.body.rating,
    memo: req.body.memo,
    // user_id: req.user.id,
  }).then(review => {
    console.log(review);
    res.redirect('/review/history');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

reviewController.delete = (req, res) => {
  Review.destroy(req.params.id)
    .then(() => {
      res.redirect('/review/history');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
      });
};

reviewController.edit = (req, res) => {
  Review.findById(req.params.id)
    .then(review => {
      console.log(review + 'this is edit');
      res.render('reviews/review-edit',{
        data: review,
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
}

reviewController.update = (req, res) => {
  Review.update({
    res_name: req.body.res_name,
    rating: req.body.rating,
    memo: req.body.memo,
  }, req.params.id).then(review => {
    console.log('update');
    res.redirect('/review/history');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
};


module.exports = reviewController;