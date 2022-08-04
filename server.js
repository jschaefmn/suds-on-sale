// importing required modules
const express = require("express");
const sequelize = require("./config/connection");

// initializing server
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
sequelize.sync({ force: false }).then(() => {
  console.log(`Now connected to database...`);
  // start express server
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}...`));
});
