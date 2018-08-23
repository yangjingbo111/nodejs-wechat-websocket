var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('../../models/user');

// mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true});
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("db connected");
// });

var router = express.Router();

// middleware specific to this router
var jsonParser = bodyParser.json();

// router.get('/', function(req, res){
//   User.find({}, function(err, data){
//     console.log(data);
//     res.json(data);
//   });
//
// });

// deal with user login
router.post('/', jsonParser, function(req, res){
    console.log(req.body);

    User.find({phone_num: req.body.phone_num,pwd: req.body.pwd,}, function(err, data){
      console.log(data.length);
      if (data.length > 0) {
        res.json({
          ret_code: 10002 // login ok
        });
      }else {
        res.json({
          ret_code: 10001 // user not exist
        });
      }
      // res.json(data);
    });
});
router.post('/reset-pwd', jsonParser, function(req, res){
    console.log(req.body);
    res.json({
      code: 'to be finished'
    });
    // User.find({phone_num: req.body.phone}, function(err, data){
    //   console.log(data.length);
    //   if (data.length > 0) {
    //     res.send('该用户已存在');
    //   }else {
    //     res.send('ok');
    //     User.create(req.body)
    //       .then(function(data){
    //         res.json(data);
    //       });
    //   }
    //   // res.json(data);
    // });
});

module.exports = router;
