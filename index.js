var express = require('express');
var jade = require('jade');
var app = express();
var mongoose = require('mongoose');
var router = express.Router();

var api = require('./lib/api');

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use('/', router);


router.get('/', function(req, res) {
  api.get_latest(req, res, function(e, d) {
    if (e) return console.log(error);
    res.render('index', { data: JSON.stringify(d) });
  })
})

app.listen(app.get('port'), function() {
  console.log('Server running at http://localhost:' + app.get('port'));
})

