const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Category = require("./Category");
const Tag = require("./Tag");
const Upvote = require("./Upvote");
const Downvote = require("./Downvote");

// ceate assosciations
// User Post Relation
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment User Post Relation
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// Upvote User Post Relation
User.belongsToMany(Post, {
  through: Upvote,
  as: "upvoted_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Upvote,
  as: "upvoted_posts",
  foreignKey: "post_id",
});

Upvote.belongsTo(User, {
  foreignKey: "user_id",
});

Upvote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Upvote, {
  foreignKey: "user_id",
});

Post.hasMany(Upvote, {
  foreignKey: "post_id",
});

// Downvote User Post Relation
User.belongsToMany(Post, {
  through: Downvote,
  as: "downvoted_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Downvote,
  as: "downvoted_posts",
  foreignKey: "post_id",
});

Downvote.belongsTo(User, {
  foreignKey: "user_id",
});

Downvote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Downvote, {
  foreignKey: "user_id",
});

Post.hasMany(Downvote, {
  foreignKey: "post_id",
});

// Post Category Relation
Post.belongsTo(Category, {
    foreignKey: "category_id",
});

Category.hasMany(Post, {
    foreignKey: "category_id"
});

// Tag Post Relation
Post.belongsTo(Tag, {
    foreignKey: "tag_id"
});

Tag.hasMany(Post, {
    foreignKey: "tag_id"
});

module.exports = { User, Post, Comment, Category, Tag, Upvote, Downvote };
