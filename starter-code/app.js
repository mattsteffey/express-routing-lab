var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./candyRouter');
const PORT = process.env.PORT || 6699;

app.use(bodyParser.json());
app.use('/candies', router);
//How do we redirect the /candies path
//through our candyRouter?


//Hint: you need app.use


app.listen(6699, function() {
 console.log('Now running on local port ' + PORT);
});
