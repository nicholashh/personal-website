
// set-up dependencies

var lessMiddleware = require('less-middleware');

var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(lessMiddleware(__dirname + '/public')); // 1
app.use(express.static(__dirname + '/public')); // 2

// routing information

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/about-me', function(request, response) {
  response.render('pages/about-me');
});

app.get('/cv-resume', function(request, response) {
  response.render('pages/cv-resume');
});

app.get('/teaching', function(request, response) {
  response.render('pages/teaching');
});

app.get('/contact-info', function(request, response) {
  response.render('pages/contact-info');
});

// run the app

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
