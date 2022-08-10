# Suds on Sale
## Description
Suds on sale is an online forum for the thrifty alcohol enthusiasts to talk about and share deals with other users. This webpage is structured with the Model View Controller design paradigm. For the Model: Sequelize and MySQL2 Nodejs modules are used to create the models and link the models to our database via Object Relational Mapping; in addition to those, we used ConnectSequelizeSessionJs to link any sessions created to the database. For the View: Handlebars is used for creating the templates as well as having supporting frontend JavaScript and CSS. For the Controller: Express and Express Sessions were used to set up our server, our routes to connect our models to the front end, and to establish sessions for the user. An additional technology used was LinkPreviewJs; this was used to retrieve a URL containing an image for the users post.

## How to Install and Run
Suds on sale is deployed at [Suds On Sale](https://group-project-dos.herokuapp.com/). To run this project locally you will need to:
1. Clone the repository to you computer at [GitHub](https://github.com/lundbmp/group-project-2). 
2. Once the repository is on your computer run `npm i` in your command prompt to install all needed dependencies. 
3. In the `.env` file you will need  to enter in your database username and database password in the respective fields. 
4. Next you will login to your MySQL and run `source db/schema.sql` to set up the inital database.
5. *Optional* Run in our command prompt `node seeds/index.js` to populate the database with seed data.
6. Start the program by typing `npm start`.
7. Go to `localhost:3001` in your browser of choice.
8. Enjoy!

## How to Use
To use this project you will need to visit [Suds On Sale](https://group-project-dos.herokuapp.com/) where you can login or create a new account. From there you will be able to view posts, create your own posts, comment, and upvote.

## Credits
This project was completed by [Michael Lundberg](https://github.com/lundbmp), [Mac Mitsch](https://github.com/MacMitsch), [Adam Smith](https://github.com/smith-utxo), and [Jake Schaefbauer](https://github.com/jschaefmn).

## The MIT License (MIT)
=====================

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.