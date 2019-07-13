var express = require('express');
var router = express.Router();
var path = require('path');//路径模块
console.log(__dirname);
//编写执行函数
router.get('/', function(req, res, next) {
    //使用绝对定位打开views下面的html文件
    // res.sendFile(__dirname + "/index.html" )
    res.sendFile(path.resolve('./views/index.html'));
 
});

module.exports = router;
