var express = require('express');
const mongoose = require('mongoose');
var home = require('./routers/home');
var chats = require('./routers/chats');
var repos = require('./routers/repos');
var startWebsocket = require('./websocket')
var apiWeather = require('./routers/api/weather');
var apiLogin = require('./routers/api/login');
var apiRegister = require('./routers/api/register');

const SERVER_PORT = 4000;

mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("db connected");
});


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
app.use('/api/register', apiRegister);
app.use('/api/login', apiLogin);

var server = app.listen(SERVER_PORT, function() {
  console.log(`server is listening on port: ${SERVER_PORT}`);
});

startWebsocket(server);
// console.log(server);
