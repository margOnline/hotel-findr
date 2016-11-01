var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="/reload/reload.js"></script>
    <h2>Top Hotels</h2>
    <img src="/images/icon_sprite.png">
    <script src="/js/behaviour.js"><script>
  `)
});

module.exports = router;
