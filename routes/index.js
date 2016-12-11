var express = require('express');
var router = express.Router();
var filereader = require('../lib/filereader');

/* GET home page. */
router.get('/', function(req, res, next) {
    var Users = JSON.parse(filereader.readFile('Users'));
    res.render('index', { users: Users.users.row });
});
// router.get('/user/:id', function(req, res, next) {
//     var post = JSON.parse(filereader.readFile('Posts'));
//     res.json(post.posts.rowId[req.params.id]);
//     //res.render('post', { posts: post.posts.row.Id[req.params.id] });
// });

module.exports = router;