var express = require('express');
var router = express.Router();
var path = require('path');
//views 주소 변수화     //__dirname = 현재 파일 주소
var view = path.join(__dirname, "../../views/member/");

const find = require('./find');
const join = require('./join');

router.post('/findPwd', find.findPwd);

router.post('/join', join.join);

module.exports = router;