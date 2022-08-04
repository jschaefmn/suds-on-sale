const { Category } = require("../models");

const categorydata = [
  {
    category_name: "Beer",
  },
  {
    category_name: "Wine",
  },
  {
    category_name: "Spirit",
  },
];

const seedCategories = () => Category.bulkCreate(categorydata);

module.exports = seedCategories;
