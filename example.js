var expres = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = expres();
app.use(cookieParser());

var sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    saveUninitialized: false,
    resave: false
  }
  app.get('/login', function (req, res) {
    req.session.user = req.query.email;
    res.redirect("/");
  });

  
  app.use(session(sess));

  app.listen(3000);