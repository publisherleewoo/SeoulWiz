var express = require('express');
var http = require('http');
var path = require('path')
var bodyParser = require('body-parser')
var app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
     extended: false
}))

app.post('/login', function (req, res) {
     console.log('user login')

     var uId = req.body.uId;
     var uPw = req.body.uPw;
     res.writeHead('200', {
          'Content-Type': 'text/html;charset=utf8'
     })

     res.write(uId)
     res.write('<br>')
     res.write(uPw)
     res.end()
})


app.use(function (req, res, next) {

     res.writeHead('200', {
          'Content-Type': 'text/html;charset=utf8'
     })

     res.end();
})

http.createServer(app).listen(3000, function (req, res) {
     console.log('server start')
})