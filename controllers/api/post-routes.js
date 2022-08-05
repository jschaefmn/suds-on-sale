const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post, Comment, Category, Tag, Upvote, Downvote } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/new', (req, res) => {
  // expects {title: , post_url: , user_id: 1}
  console.log(req.body);
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    post_body: req.body.post_body,
    user_id: req.body.user_id, 
    price: req.body.price, 
    category_id: req.body.category_id, 
    tag_id: req.body.tag_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Route for Upvotes 
router.put('/upvote', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.upvote({ ...req.body, user_id: req.session.user_id }, { Upvote, Comment, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router; 
