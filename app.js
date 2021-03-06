var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var memberRouter = require('./routes/member/controller');

var app = express();
dotenv.config();

var sequelize = require('./models').sequelize;

const db = function (){
  try {
    sequelize.sync();
    console.log("초기화 완료");
  } catch (error) {
    console.log("초기화 실패" + error);
  }
}
db();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//라우터 연결
app.use('/', indexRouter);
app.use('/member', memberRouter);

//포트 지정
port = process.env.PORT;

app.listen(port, () =>{
  console.log("server : " + port);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
