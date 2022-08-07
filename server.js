// importing required modules
const path = require('path');
const express = require("express");
const session = require('express-session');
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// initializing server
const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(require('./controllers/'));


// connect to database
sequelize.sync({ force: false }).then(() => {
  console.log(`Now connected to database...`);
  // start express server
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}...`));
});
