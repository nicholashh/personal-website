
// dependencies

var express = require('express');

// set-up

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// routing

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/about-me', function(request, response) {
  response.render('pages/about-me');
});

app.get('/cv-resume', function(request, response) {
  response.render('pages/cv-resume');
});

app.get('/social-media', function(request, response) {
  response.render('pages/social-media');
});

// run the app

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
