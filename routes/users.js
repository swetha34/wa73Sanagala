var express = require('express');
var router = express.Router();
var num=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  num+=1;
  res.send(`User accesses are:${num}`);
});

module.exports = router;
