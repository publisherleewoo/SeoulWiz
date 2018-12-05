var express = require('express');
var http = require('http');
var path = require('path')

var app = express();

app.use(function (req, res, next) {

     res.writeHead('200', {
          'Content-Type': 'text/html;charset=utf8'
     })
     console.log(req.query)
     console.log(req.parmas)
     console.log(req.body)
     res.write('paramsInfo : ' + paramInfo)
     res.end();
})

http.createServer(app).listen(3000, function (req, res) {
     console.log('server start')
})