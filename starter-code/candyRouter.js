var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
	{"id":1,"name":"Chewing Gum","color":"Red"},
	{"id":2,"name":"Pez","color":"Green"},
	{"id":3,"name":"Marshmallow","color":"Pink"},
	{"id":4,"name":"Candy Stick","color":"Blue"}

];

router.get('/', function(req,res) {
	res.json(candies);
});

router.get('/:id', function(req,res) {
	res.json(candies[req.params.id-1]);
});

router.post('/', function(req, res) {
	 candies.push(req.body);
     res.json(req.body);
  });







module.exports = router;