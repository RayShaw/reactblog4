// 引入模块
var express = require('express');
var path = require('path');
var app = express();
// var MongoClient = require('mongodb').MongoClient;
// var ejs = require('ejs');


// 新增接口路由
// app.get('/data/:module', function (req, res, next) {
// 	var c_path = req.params.module;
// 	var Action = require('./server/action/data/' + c_path);
// 	Action.execute(req, res);
// });

// // 对所有(/)URL或路由返回index.html 
// app.get('/', function (req, res) {
// 	 res.render('index');
//   // res.sendfile(path.join(__dirname, 'index'));
// });


// // 设置views路径和模板
// app.set('views', './');
// app.set('view engine', 'html');
// app.engine('html', ejs.renderFile);

// app.use配置
// app.use('/client/static', express.static(path.join(__dirname, 'client/static')));
// app.use(express.static(path.join(__dirname, '')));

app.use('/static', express.static(path.join(__dirname, '/static')));

app.get('*', function(req, res) {                                                                                                                                                  
	res.sendFile(path.join(__dirname, 'index.html'));                                                                                                                              
});   

// db
// global.db = null;
// var dbn = 'blog'; // 数据库名字
// console.log('connecting database...'); 
// MongoClient.connect('mongodb://localhost/' + dbn, function(err, instance) {
//   if (err != null)
//     return console.log('database error!'); 

//   global.db = instance;
//   console.log('database connected:', dbn);

//   ServerStart();
// });


// function ServerStart() {
  // 启动一个服务，监听从3000端口进入的所有连接请求
  app.listen(3000, function(){
  	console.log('http://localhost:3000/');
  }); 
// }
