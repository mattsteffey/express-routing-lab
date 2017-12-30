var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
	{"id":1,"name":"Chewing Gum","color":"Red"},
	{"id":2,"name":"Pez","color":"Green"},
	{"id":3,"name":"Marshmallow","color":"Pink"},
	{"id":4,"name":"Candy Stick","color":"Blue"}
];


router.get('/', function(req, res) {
	res.send(candies);
});

router.get('/:index', function(req, res) {
	res.send(candies[req.params.index-1]);
});

router.post('/', function(req, res) {
	req.body.id = candies.length + 1;
	candies.push(req.body);
	res.send(req.body);
});

router.put('/:index', function(req, res) {
	candies[req.params.index-1] = req.body;
	res.send(candies[req.params.index-1]);
});

router.delete('/:index', function(req, res) {
	candies[req.params.index-1] = null;
	res.send(candies[req.params.index-1]);
});

module.exports = router;