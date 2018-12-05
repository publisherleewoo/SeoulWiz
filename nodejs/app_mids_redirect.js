var express = require('express');
var http = require('http');
var path = require('path')

var app = express();

app.use(function (req, res, next) {
     console.log('use middleware - 01')
     res.redirect("http://www.naver.com")

})

http.createServer(app).listen(3000, function (req, res) {
     console.log('server start')
})