// app.js
const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    secret: 'sk_test_51O9hHgSHSLo8IC3atTrSBzegwUnayTKHmkOJ11pKih353ysee2B4ZzXIAIizV547pXXVPwXkKS3WgDmXY1wtYBac00zwZo8BbJ',
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// ...

// Include your user routes
app.use('/authentication', require('./routes/authentication'));

// ...

