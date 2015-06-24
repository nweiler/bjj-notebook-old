var express = require('express');
var jade = require('jade');
var app = express();
var mongoose = require('mongoose');
var router = express.Router();

var api = require('./lib/api');

app.set('port', (process.env.port || 3000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use('/', router);

mongoose.connect('mongodb://mongo_user:user_mongo@ds043062.mongolab.com:43062/heroku_934vsv2t');
var db = mongoose.connection;

db.once('open', function() {

  router.get('/', function(req, res) {
    api.get_latest(req, res, db, function(e, d) {
      if (e) return console.log(error);
      res.send(JSON.stringify(d));
    })
  })

  app.listen(app.get('port'), function() {
    console.log('Server running at http://localhost:%s', app.get('port'));
  })
})


