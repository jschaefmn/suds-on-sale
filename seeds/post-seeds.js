const { Post } = require("../models");

const postdata = [
  {
    title: "Ford's gin",
    post_url: "https://www.haskells.com/fords-gin-750ml/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 27.49,
    user_id: 1,
    category_id: 3,
    tag_id: 9,
  },
  {
    title: "Tito's",
    post_url: "https://www.haskells.com/titos-vodka-1-0l/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 19.99,
    user_id: 2,
    category_id: 3,
    tag_id: 4,
  },
  {
    title: "Old Forester 1920 Bourbon",
    post_url: "https://www.haskells.com/old-forester-1920-bourbon-750ml/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 62.99,
    user_id: 3,
    category_id: 3,
    tag_id: 3,
  },
  {
    title: "Surly Coffee Bender 16oz",
    post_url: "https://www.haskells.com/surly-coffee-bender-16oz-4pk-cans/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 9.99,
    user_id: 4,
    category_id: 1,
    tag_id: 2,
  },
  {
    title: "Summit EPA 12pk bottles",
    post_url: "https://www.haskells.com/summit-epa-12pk-bottles/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 16.99,
    user_id: 5,
    category_id: 1,
    tag_id: 1,
  },
  {
    title: "Fulton Lonely Blonde",
    post_url: "https://www.haskells.com/fulton-lonely-blonde-12pk-bottles/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 14.99,
    user_id: 6,
    category_id: 1,
    tag_id: 12,
  },
  {
    title: "Hendricks",
    post_url: "https://www.haskells.com/hendricks-gin-750ml/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 33.99,
    user_id: 7,
    category_id: 3,
    tag_id: 9,
  },
  {
    title: "Rombauer Chardonnay",
    post_url: "https://www.haskells.com/rombauer-chardonnay/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 37.98,
    user_id: 8,
    category_id: 2,
    tag_id: 3,
  },
  {
    title: "Chateau Tour St Georges",
    post_url: "https://www.haskells.com/chateau-tour-st-georges/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 13.99,
    user_id: 9,
    category_id: 2,
    tag_id: 3,
  },
  {
    title: "Wild Turkey",
    post_url: "https://www.haskells.com/wild-turkey-1-75l/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 36.99,
    user_id: 10,
    category_id: 3,
    tag_id: 11,
  },
  {
    title: "Vikre Aquavit",
    post_url: "https://www.haskells.com/vikre-aquavit-750ml/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 33.99,
    user_id: 1,
    category_id: 3,
    tag_id: 9,
  },
  {
    title: "Korta Katarina Plavac Mali",
    post_url: "https://www.haskells.com/korta-katarina-plavac-mali/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 9.99,
    user_id: 2,
    category_id: 2,
    tag_id: 4,
  },
  {
    title: "Woodford Reserve",
    post_url: "https://www.haskells.com/woodford-reserve-750ml/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 25.99,
    user_id: 3,
    category_id: 3,
    tag_id: 3,
  },
  {
    title: "Summit Saga 12pk bottles",
    post_url: "https://www.haskells.com/summit-saga-12pk-bottles/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 16.99,
    user_id: 4,
    category_id: 1,
    tag_id: 2,
  },
  {
    title: "Burning Brothers Pyro 16oz 4pk cans",
    post_url: "https://www.haskells.com/burning-brothers-pyro-16oz-4pk-cans/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 11.99,
    user_id: 5,
    category_id: 1,
    tag_id: 1,
  },
  {
    title: "Fulton Sweet Child of Vine IPA 12pk bottles",
    post_url: "https://www.haskells.com/fulton-sweet-child-of-vine-ipa-12pk-bottles/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 14.99,
    user_id: 6,
    category_id: 1,
    tag_id: 12,
  },
  {
    title: "Beefeater Gin",
    post_url: "https://www.haskells.com/beefeater-gin-1-75l/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 23.99,
    user_id: 7,
    category_id: 3,
    tag_id: 9,
  },
  {
    title: "Josh Cellars Cabernet Sauvignon",
    post_url: "https://www.haskells.com/josh-cellars-cabernet-sauvignon/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 12.98,
    user_id: 8,
    category_id: 2,
    tag_id: 3,
  },
  {
    title: "Piattelli Malbec Tannat Cafayate",
    post_url: "https://www.haskells.com/piattelli-malbec-tannat-cafayate/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 12.99,
    user_id: 9,
    category_id: 2,
    tag_id: 3,
  },
  {
    title: "Plantation Dark Rum",
    post_url: "https://www.haskells.com/plantation-dark-rum-1-0l/",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 17.99,
    user_id: 10,
    category_id: 3,
    tag_id: 11,
  },
];

const seedPosts = () => Post.bulkCreate(postdata, { individualHooks: true });

module.exports = seedPosts;
