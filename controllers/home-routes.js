const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment, Category, Tag, Upvote, Downvote } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  // The Model table 'Post' and sequelize method 'findall()'
  Post.findAll({  // to filter so only some columns are returned you can utilize 'attributes' in sequelize
    attributes: ['title', 'post_body', 'created_at', 'post_url'],
    //Need to include the upvotes and downvotes tally 
    include: [
      {
        model: Upvote,
        attributes: ['id', 'user_id', 'post_id']
      }, 
      {
        model: Downvote, 
        attributes: ['id', 'user_id', 'post_id']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },

  })


})

module.exports = router; 