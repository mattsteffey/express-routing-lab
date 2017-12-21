var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candy = [
	{"id":1, 	"name":"Jawbreaker", 			"color": "White"	},
	{"id":2, 	"name":"Gumdrop", 				"color": "Various"	},
	{"id":3, 	"name":"Chocolate Bar", 		"color": "Brown"	},
	{"id":4, 	"name":"White Chocolate Bar",   "color": "White"	},
	{"id":5, 	"name":"Bubblegum", 			"color": "Pink"		},
	{"id":6, 	"name":"Gummy Bears", 			"color": "Various"	},
	{"id":7, 	"name":"Peppermint Stick", 		"color": "Green"	},

];



router.get('/candies', function(req,res) {
	res.json(candy);
});
//What would need to go into candies
//in order to pass our first test?


	// What would go here? 
	// Hint: we want all candies in JSON format


// Fill out the rest of the routes here

module.exports = router;