var express = require('express');
var router = express.Router();
var path = require('path');
//views 주소 변수화     //__dirname = 현재 파일 주소 ex)...node-homepage\routes
var view = path.join(__dirname, "../views/");

router.get('/', function(req, res, next) {
  res.sendFile(view + "index.html");
});

module.exports = router;