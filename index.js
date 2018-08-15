var express = require('express');
var home = require('./routers/home');
var chats = require('./routers/chats');
var repos = require('./routers/repos');
var startWebsocket = require('./websocket')

// create express app
var app = express();

// express use css and js files
app.use(express.static('public'));

// set template engine -> ejs
app.set('view engine', 'ejs');

// home(app);

// middleware: routers
app.use('/', home);
app.use('/chats', chats);
app.use('/repos', repos);

var server = app.listen(3000, function() {
  console.log("server is listening on port: 3000");
});

startWebsocket(server);
// console.log(server);
