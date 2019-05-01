
/* set-up dependencies */

var lessMiddleware = require('less-middleware');

var express = require('express');
var app = express();
var fileSystem = require('fs')
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(lessMiddleware(__dirname + '/public')); // 1
app.use(express.static(__dirname + '/public')); // 2

/* routing information */

// home page
app.get('/', function(request, response) {
  response.render('pages/index');
});

// top navigation bar links
app.get('/about-me', function(request, response) {
  response.redirect('http://www.brandeis.edu/departments/philosophy/people/nicholas_hh.html');
});
app.get('/resume', function(request, response) {
  response.redirect('http://nicholashh.github.io/cv-resume-tex/nicholas-hanson-holtry.resume.pdf');
});
app.get('/cv', function(request, response) {
  response.redirect('http://nicholashh.github.io/cv-resume-tex/nicholas-hanson-holtry.cv.pdf');
});
app.get('/github', function(request, response) {
  response.redirect('https://github.com/nicholashh');
});
app.get('/linkedin', function(request, response) {
  response.redirect('https://www.linkedin.com/in/nicholashh');
});
app.get('/facebook', function(request, response) {
  response.redirect('https://www.facebook.com/nicholashh');
});

// other miscellaneous links
app.get('/reading-list', function(request, response) {
  response.redirect('https://docs.google.com/spreadsheets/d/1Hjb66_jIrcjbeLb4Zr_eDcMUSx8MwH3UZBa_Xg6OQqU/pubhtml?gid=127838593');
});
app.get('/phil-ranker', function(request, response) {
  response.redirect('https://nicholashh.github.io/phil-ranker/');
});
app.get('/gss', function(request, response) {
  response.redirect('https://docs.google.com/presentation/d/1baSx8FO9Go6fOGWbt7gLT_sQi9IbBSfdetDHV9TXv1U/');
});
app.get('/jen', function(request, response) {
  response.redirect('https://docs.google.com/presentation/d/1MzXAmlk0PGBLpxAA_rh7jlPVSkxEoUjccaiFMlboKQU/');
});

// files
app.get('/statement-of-purpose', function(request, response){
  fileSystem.readFile('public/files/statement.pdf', function (error, file){
     response.contentType("application/pdf");
     response.end(file);
  });
});
app.get('/ranker/data-setup.js', function(request, response){
  fileSystem.readFile('/ranker/data-setup.js', function (error, file){
     response.contentType("application/javascript");
     response.end(file);
  });
});

/* run the app */

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
