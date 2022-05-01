var express = require('express');
var router = express.Router();
var path = require('path');
//views 주소 변수화     //__dirname = 현재 파일 주소
var view = path.join(__dirname, "../../views/member/");

const find = require('./model/find');

router.get('/findPwd', function(req, res, next) {
    res.sendFile(view + "find_pwd.html");
});

router.post('/findPwd', find.findPwd);

router.get('/findId', function(req, res, next) {
    res.sendFile(view + "find_id.html");
});

router.get('/join', function(req, res, next) {
    res.sendFile(view + "join.html");
});

module.exports = router;