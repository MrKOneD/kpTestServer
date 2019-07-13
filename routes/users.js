const express = require('express');
const router = express.Router();
const URL = require('url');
//加载mysql模块
const mysql = require('mysql');


//创建连接
const connection = mysql.createConnection({
    host: '47.106.139.17',
    user: 'root',
    password: '1234',
    database: 'test'
});

//执行创建连接 
connection.connect();


//sql语句
let queryUser = 'SELECT * FROM users';

/* GET users listing. */
router.get('/', function(req, res, next) {
    let params = URL.parse(req.url, true).query;
    connection.query(queryUser, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        //把搜索值输出
        res.send(result);
    });
});

module.exports = router;