"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var config = require("./config/db");
var app = express();
mongoose.connect(config.database, function (err) {
    if (err) {
        console.log('Could NOT connect to database: ', err);
    }
    else {
        console.log('Connected to database: ' + config.database);
    }
});
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    console.log('Listening on port ' + app.get('port'));
});
