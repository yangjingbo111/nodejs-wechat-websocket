var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var router = express.Router();

// middleware specific to this router
var jsonParser = bodyParser.json();




router.post('/photos', upload.single('avatar'), function(req, res, next){
    console.log(req.file);
    console.log(req.body);
    res.json({
      code: 'thank you for your file'
    });

});

module.exports = router;
