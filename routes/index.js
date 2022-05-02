var express = require('express');
var router = express.Router();
//views 주소 변수화     //__dirname = 현재 파일 주소 ex)...node-homepage\routes
var path = require('path');
var view = path.join(__dirname, "../views/");

router.get('/', function(req, res, next) {
  res.sendFile(view + "index.html");
});

router.get('/findPwd', function(req, res, next) {
  res.sendFile(view + "/member/find_pwd.html");
});

router.get('/findId', function(req, res, next) {
  res.sendFile(view + "/member/find_id.html");
});

router.get('/join', function(req, res, next) {
  res.sendFile(view + "/member/join.html");
});

module.exports = router;