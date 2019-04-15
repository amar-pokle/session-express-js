var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({'secret': '345221@123#4' , saveUninitialized: false, resave: false}));

app.get('/', function(req,res)  {
    req.session.name = "Amar",

    console.log(req.session.name);
});

app.listen(4000);

