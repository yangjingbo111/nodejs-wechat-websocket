var express = require('express');
const bodyParser = require('body-parser');
const User = require('../../models/user');



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

router.post('/', jsonParser, function(req, res){
    console.log(req.body);

    User.find({phone: req.body.phone_num}, function(err, data){
      console.log(data.length);
      if (data.length > 0) {  // user existed
        res.json({
          msg: 'user existed'
        });
      }else {
        // res.send('ok');
        User.create(req.body)
          .then(function(data){
            res.json(data);
          });
      }
      // res.json(data);
    });



    // User.create(req.body).then(function(data){
    //   res.json(data);
    // });

});

module.exports = router;
