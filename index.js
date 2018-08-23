var express = require('express');
var home = require('./routers/home');
var chats = require('./routers/chats');
var repos = require('./routers/repos');
var startWebsocket = require('./websocket')
var apiWeather = require('./routers/api/weather');
var apiLogin = require('./routers/api/login');

// test mongodb
// const mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true});



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
app.use('/api/weather', apiWeather);
app.use('/api/login', apiLogin);

var server = app.listen(4000, function() {
  console.log("server is listening on port: 4000");
});

startWebsocket(server);
// console.log(server);
