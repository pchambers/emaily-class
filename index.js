const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

const app = express();

//adding middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//require routes with the app that was created. app gets new app handlers
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production'){
  // Express will server production assets like main.js or main.css files
  app.use(express.static('client/build'));

  //Express to serve index.html if it doesn't recognize route.
  const path = require('path');
  //checkout circle ci at some point for continuous integration.
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
