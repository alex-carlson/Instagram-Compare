var express = require('express');
var router = express.Router();
Instagram = require('instagram-node-lib');

Instagram.set('client_id', '08bdf46edcc14d25be3c73c60cdd95b6');
Instagram.set('client_secret', 'be57bad3544941e9a4ba08de3284d4ae');
Instagram.set('callback_url', 'swag');

var instaData = [];

Instagram.tags.recent({
  name: 'minneapolis',
  complete: function(data){
    instaData.push(data);
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Instagram Compare', inst:  instaData});
});

module.exports = router;
