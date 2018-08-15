var express = require('express');
var chats = require('./routers/chats');
var repos = require('./routers/repos');
var startWebsocket = require('./websocket')

// create express app
var app = express();

// middleware: routers
app.use('/chats', chats);
app.use('/repos', repos);

var server = app.listen(3000, function() {
  console.log("server is listening on port: 3000");
});

startWebsocket(server);
// console.log(server);
