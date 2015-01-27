//server.js

//set up
var express = require('express');
var app = express();	//create app w/express
var mongoose = require('mongoose');	//mogoose for mongoDB
var morgan = require('morgan');	//log requests to the console 
var bodyParser = require('body-parser');	//pull info from HTML POST
var methodOverride = require('method-override');	//simulate DELETE and PUT

//configuration
mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uw03mypu'); //connect to mongoDB databse on modulus.info

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev'));	//log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));	//parse application/x-www-form-urlencoded
app.use(bodyParser.json());	//parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); //parse application/vnd.api+json as json
app.use(methodOverride());

//listen (start app with node server.js)
app.listen(8080);
console.log('App listening on port 8080');