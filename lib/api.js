var api = module.exports = {};


api.get_latest = function(req, res, db, cb) {
  db.collection('users').find().toArray(function(e, d) {
    cb(e, d);
  })
}

