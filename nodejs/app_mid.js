var express = require('express');
var http = require('http');
var path = require('path')

var app = express();

app.use(function (req, res, next) {
     console.log('use middleware')
     res.writeHead("200", {
          "Content-Type": "text/html;charset=utf-8"
     })
     res.end("MIDDLEWARE 가나다")
})


http.createServer(app).listen(3000, function (req, res) {

     console.log('server start')
})