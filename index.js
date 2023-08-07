// index.js

const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./config/connection');
const authController = require('./controllers/authController');
const blogController = require('./controllers/blogController');

const app = express();

app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));

// Set up session management
const sessionStore = new SequelizeStore({ db });
app.use(session({
  secret: 'your-secret-key',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
}));

app.use(authController);
app.use(blogController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
