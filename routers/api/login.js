var express = require('express');
const bodyParser = require('body-parser');

var router = express.Router();

// middleware specific to this router
var jsonParser = bodyParser.json();

router.get('/', function(req, res){
  res.json({
    name: 'yangjb',
    phone: '18251340272'
  });
});

router.post('/', jsonParser, function(req, res){
    console.log(req.body);
    res.json({
      name: 'yangjb',
      phone: '18251340272'
    });
});

module.exports = router;
