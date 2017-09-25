var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Well Done Nikhil!')
})

app.listen(3000, function () {
  console.log('Magic is happening on port 3000!')
})
