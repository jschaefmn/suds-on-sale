const { User } = require("../models");

const userdata = [
  {
    username: "beerlover1",
    email: "beerlover1@gmail.com",
    password: "password123",
  },
  {
    username: "beerlover2",
    email: "beerlover2@gmail.com",
    password: "password123",
  },
  {
    username: "beerlover3",
    email: "beerlover3@gmail.com",
    password: "password123",
  },
  {
    username: "ginlover1",
    email: "ginlover1@gmail.com",
    password: "password123",
  },
  {
    username: "ginlover2",
    email: "ginlover2@gmail.com",
    password: "password123",
  },
  {
    username: "ginlover3",
    email: "ginlover3@gmail.com",
    password: "password123",
  },
  {
    username: "winelover1",
    email: "winelover1@gmail.com",
    password: "password123",
  },
  {
    username: "winelover2",
    email: "winelover2@gmail.com",
    password: "password123",
  },
  {
    username: "winelover3",
    email: "winelover3@gmail.com",
    password: "password123",
  },
  {
    username: "WHISKEY_LOVER",
    email: "bsteen9@epa.gov",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
