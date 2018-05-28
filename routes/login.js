var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res, next) {
    res.render('login');
});
router.post('/userlogin',function (req,res,next) {
    var username = req.body.username;
    var userpwd = req.body.userpwd;
    console.log(username);
    console.log(userpwd);
    pool.getConnection(function (err,connection) {
        var $sql = "select * from user where username=?";
        connection.query($sql, [username], function (err, result) {
            var resultJson = result;
            console.log(resultJson.length);
            if (resultJson.length === 0) {
                result = {
                    code: 300,
                    msg: '该账号不存在'
                };
                res.json(result);
                console.log(result);
                connection.release();
            }
            else {
                var $sql1 = "select * from user where username=?";
                connection.query($sql1, [username], function (err, result) {
                    var temp = result[0].userpwd;
                    var lv = result[0].lv;
                    if (temp === userpwd) {
                        if (lv == 1)
                        {result = {
                            code: 200,
                            msg: '密码正确',
                            lv: 1};
                        }
                        else if(lv == 2)
                        {
                            result = {
                                code: 200,
                                msg: '密码正确',
                                lv: 2};
                        }
                    }
                    else {
                        result = {
                            code: 400,
                            msg: '密码错误',
                            lv: 0
                        };
                    }
                    res.json(result);
                    connection.release();
                });
            }
        });
    })
});

module.exports = router;
