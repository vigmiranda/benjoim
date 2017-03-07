var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Server Executando');
})

app.get('/login', function (req, res) {
  res.send('logado');
})

app.get('/user', function (req, res) {
  res.send('usuario');
})


app.listen(5000, function () {
  console.log('Example app listening on port 3000!')
})