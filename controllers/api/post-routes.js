const router = require("express").Router();
const sequelize = require("../../config/connection");
const {
  User,
  Post,
  Comment,
  Upvote,
} = require("../../models");
const withAuth = require("../../utils/auth");
const imagePreview = require('../../utils/imagePreview');

// Create new post Route
router.post("/new", withAuth, (req, res) => {
  // expects {title: , post_url: , user_id: 1}
  console.log(req.body);
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    post_body: req.body.post_body,
    user_id: req.body.user_id,
    price: req.body.price,
    category_id: req.body.category_id,
    tag_id: req.body.tag_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get Post by Id
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["title", "price", "post_body", "created_at", "post_url"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then(async (dbPostData) => {
      dbPostData.image_url = await imagePreview(
        dbPostData.post_url
      );
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Route for Upvotes
router.put("/upvote", withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.upvote(
    { ...req.body, user_id: req.session.user_id },
    { Upvote, Comment, User }
  )
    .then((updatedVoteData) => res.json(updatedVoteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Route to Update invididual Post. User can only update title, description, & price.
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post_body: req.body.body,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to Delete individual Post
router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
