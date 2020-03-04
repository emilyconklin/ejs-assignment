const path = require('path');
const express = require('express');
const ejs = require('ejs');
const pageInfo = require('./pageInfo');
const moment = require('moment');

const app = express();

app.locals.moment = require('moment');

app.set('view engine','ejs'); // allows us to exclude the file extension

app.get('/',function(req, res) {  
  res.render('index',pageInfo.index);
});

app.get('/why',function(req, res) {  
  res.render('why',pageInfo.why);
});

app.get('/lies',function(req, res) {  
  res.render('lies',pageInfo.lies);
});

app.get('/facts',function(req, res) {  
  res.render('facts',pageInfo.facts);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});