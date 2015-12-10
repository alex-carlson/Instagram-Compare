var express = require('express');
var router = express.Router();
Instagram = require('instagram-node-lib');

Instagram.set('client_id', '08bdf46edcc14d25be3c73c60cdd95b6');
Instagram.set('client_secret', 'be57bad3544941e9a4ba08de3284d4ae');

var instaData1;
var instaData2;

Instagram.tags.recent({
  name: 'food',
  complete: function(data){
    instaData1 = data;
  }
});

Instagram.tags.recent({
  name: 'drink',
  complete: function(data){
    instaData2 = data;
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Instagram Compare', ret1: instaData1, ret2: instaData2});
});

module.exports = router;
