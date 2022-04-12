const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/casita', function (req, res) {
    res.send('Hello World casita')
});

app.listen(3000)


// Start the server with 
// node "10. servidor.js"