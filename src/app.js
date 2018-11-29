var express = require('express');
var path = require('path');
var fs = require('fs')
var app = express();
var ejs = require('ejs');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.listen(8080);