const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  if (req.session.loggenIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Beer Category Route
router.get("/beer", (req, res) => {
  // The Model table 'Post' and sequelize method 'findall()'
  Post.findAll({
    // to filter so only some columns are returned you can utilize 'attributes' in sequelize
    where: {
      category_id: 1,
    },
    attributes: [
      "title",
      "price",
      "post_body",
      "created_at",
      "post_url",
      "image_url",
      "id",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE upvote.post_id=post.id)"
        ),
        "upvote_count",
      ],
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("beer", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Wine Category Route
router.get("/wine", (req, res) => {
  // The Model table 'Post' and sequelize method 'findall()'
  Post.findAll({
    // to filter so only some columns are returned you can utilize 'attributes' in sequelize
    where: {
      category_id: 2,
    },
    attributes: [
      "title",
      "price",
      "post_body",
      "created_at",
      "post_url",
      "image_url",
      "id",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE upvote.post_id=post.id)"
        ),
        "upvote_count",
      ],
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("wine", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Spirits-Hard Liquor Route
router.get("/spirits", (req, res) => {
  // The Model table 'Post' and sequelize method 'findall()'
  Post.findAll({
    // to filter so only some columns are returned you can utilize 'attributes' in sequelize
    where: {
      category_id: 3,
    },
    attributes: [
      "title",
      "price",
      "post_body",
      "created_at",
      "post_url",
      "image_url",
      "id",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE upvote.post_id=post.id)"
        ),
        "upvote_count",
      ],
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("spirits", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Home Route to view all Posts
router.get("/", (req, res) => {
  // The Model table 'Post' and sequelize method 'findall()'
  Post.findAll({
    // to filter so only some columns are returned you can utilize 'attributes' in sequelize
    attributes: [
      "title",
      "price",
      "post_body",
      "created_at",
      "post_url",
      "image_url",
      "id",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE upvote.post_id=post.id)"
        ),
        "upvote_count",
      ],
    ],
    order: [
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM upvote WHERE upvote.post_id=post.id)"
        ),
        "DESC",
      ],
    ],
  })
    .then((dbPostData) => {
      if (dbPostData.length > 10) {
        dbPostData.length = 10;
      }
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to view a single post that includes the comments
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "title",
      "price",
      "post_body",
      "created_at",
      "post_url",
      "image_url",
      "id",
    ],
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
    .then((dbPostData) => {
      const post = dbPostData.get({ plain: true });
      res.render("single-post", { post });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// if user access login page and they are already logged in, redirect to home page, else display login.

router.get("/create", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("create");
});

module.exports = router;
