var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.json({
    city: 'nantong',
    weather: '32.1'
  });
});

module.exports = router;
