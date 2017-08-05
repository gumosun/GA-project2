const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
    email: req.body.email,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

usersController.index = (req, res) => {
  User.findUserReviews(req.user.id)
    .then(reviews => {
        res.json({
        user: req.user,
        data: 'Put a user profile on this route',
        review: reviews,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });
}



module.exports = usersController;