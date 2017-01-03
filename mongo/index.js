var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/radionoise');

var UserSchema = mongoose.Schema({
  id: {type: String},
  passwd: {type: String},
  name: {type: String},
  post: [Number],
  token: {type: String}
});


var PostSchema = mongoose.Schema({
  owner: {type: String},
  post_id: {type: Number},
  summary: {type: String},
});

var Users = mongoose.model("users", UserSchema);
var Posts = mongoose.model("posts", PostSchema);

exports.Users = Users;
exports.Posts = Posts;
exports.db = db;
