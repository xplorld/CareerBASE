var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

//Use PublicKey as username, PrivateKey as password (stored as salted)
var UserSchema = new mongoose.Schema({});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);

module.exports = User;