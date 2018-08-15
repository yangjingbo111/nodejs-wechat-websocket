var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.send('repos home page');
});

router.get('/about', (req, res) => {
  res.send('repos about page');
});

module.exports = router;
