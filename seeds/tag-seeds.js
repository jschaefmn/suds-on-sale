const { Tag } = require("../models");

const tagdata = [
  {
    tag_name: "Hoppy",
  },
  {
    tag_name: "Light",
  },
  {
    tag_name: "Smooth",
  },
  {
    tag_name: "Has a Bite!",
  },
  {
    tag_name: "Dark",
  },
  {
    tag_name: "Sweet",
  },
  {
    tag_name: "Bitter",
  },
  {
    tag_name: "Spicy",
  },
  {
    tag_name: "Botanical",
  },
  {
    tag_name: "Citrusy",
  },
  {
    tag_name: "High Proof",
  },
  {
    tag_name: "Sipper",
  },
];

const seedTags = () => Tag.bulkCreate(tagdata);

module.exports = seedTags;
