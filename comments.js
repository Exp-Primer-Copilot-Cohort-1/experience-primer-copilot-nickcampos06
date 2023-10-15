// create web server
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Comment = require('../models/comment');
var Post = require('../models/post');

router.use(bodyParser.urlencoded({ extended: true }));

// CREATES A NEW COMMENT
router.post('/', function (req, res) {
    Comment.create({
            comment: req.body.comment,
            post: req.body.post,
            user: req.body.user
        },
        function (err, comment) {
            if (err) return res.status(500).send("There was a problem adding the comment.");
            res.status(200).send(comment);
        });
}); // <-- added missing closing parenthesis
