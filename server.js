var express = require('express');
var app = express();
var unirest = require('unirest');
//var data = require('./dataServer');
var http = require('http');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(express.static('public'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var yelp = require('yelpApi')('yHRcIf6jzZ3QvcS88zHrwg');
console.log('hello world');

api.get('/yelp', function (request, response) {

})

app.listen(process.env.PORT || 8080);
