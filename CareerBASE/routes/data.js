var express = require('express');
var router = express.Router();

// redirect to my page.
router.get('/', function (req, res, next) {
    res.redirect('Hao');
});

router.get('/:user', function (req, res, next) {
    res.render('data', { title: 'Express', user: req.params.user });
});

router.get('/:user/edit', function (req, res, next) {
    res.render('data-edit', { title: 'Express', user: req.params.user });
});

module.exports = router;
