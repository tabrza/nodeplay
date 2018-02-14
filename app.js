var app  = require('express')();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'ninja'};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
