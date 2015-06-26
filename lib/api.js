var api = {};
var mongoose = require('mongoose');


mongoose.connect('mongodb://mongo_user:user_mongo@ds043062.mongolab.com:43062/heroku_934vsv2t');
var db = mongoose.connection;

db.once('open', function() {

  api.get_latest = function(req, res, cb) {
    db.collection('users').find().toArray(function(e, d) {
      cb(e, d);
    })
  }

})


module.exports = api;
