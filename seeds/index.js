const seedUsers = require("./user-seeds");
const seedCategories = require("./category-seeds");
const seedTags = require("./tag-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");
const seedUpvotes = require("./upvote-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedCategories();
  console.log("--------------");

  await seedTags();
  console.log("--------------");

  await seedPosts();
  console.log("--------------");

  await seedComments();
  console.log("--------------");

  await seedUpvotes();
  console.log("--------------");

  process.exit(0);
};

seedAll();
