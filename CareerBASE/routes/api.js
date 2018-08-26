var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

/* GET API base endpoint */
router.get('/', function (req, res, next) {
    res.send({ 'it': 'works' });
});

router.post('/signin', userController.doLogin);

module.exports = router;
