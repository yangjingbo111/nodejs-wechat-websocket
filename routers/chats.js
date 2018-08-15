var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

// middleware specific to this router
var jsonParser = bodyParser.json();

router.get('/', function(req, res){
  res.send('chats home page');
});

router.post('/', jsonParser, (req, res) => {
  res.send(req.body);
});

router.get('/about', function(req, res){
    res.send('chats about page');
});

module.exports = router;
