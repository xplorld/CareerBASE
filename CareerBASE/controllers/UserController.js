var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");
var Base = require('@bitclave/base-client-js');

var userController = {};

// Restrict access to root page
userController.home = function (req, res) {
    res.render('index', { user: req.user });
};

// Go to registration page
userController.register = function (req, res) {
    res.render('register');
};

// Post registration
userController.doRegister = function (req, res) {
    const passphrase = req.body.passphrase;

    base.createKeyPairHelper('').createKeyPair(passphrase)
        .then(keyPair => {
            User.register(new User({ username: keyPair.publicKey }), keyPair.privateKey, function (err, user) {
                if (err) {
                    return res.render('register', { user: user });
                }

                passport.authenticate('local')(req, res, function () {
                    res.redirect('/');
                });
            });
        });


};

// Go to login page
userController.login = function (req, res) {
    res.render('login');
};

// Post login
userController.doLogin = function (req, res) {
    base.createKeyPairHelper('').createKeyPair(passphrase)
        .then(keyPair => {
            req.body.username = keyPair.publicKey;
            req.body.password = keyPair.privateKey;
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
};

// logout
userController.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

module.exports = userController;