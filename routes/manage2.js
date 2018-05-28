var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res) {
    pool.getConnection(function (err,connection) {
        var sql1 = 'SELECT * FROM guest';
        connection.query(sql1, function (err, result, next) {
            string = JSON.stringify(result);
            guests = JSON.parse(string);
            res.render('manage2', {guests:guests});
        });
    })
});
router.post('/manage2post1',function (req,res) {
    var cash_in_date = req.body.guest_in_date;
    var cash_in_amount = req.body.guest_pay_a;
    pool.getConnection(function (err,connection) {
        var $sql = 'INSERT INTO cash_in(ciid, cash_in_date, cash_in_type, cash_in_amount) VALUES(0, ?, ?, ?)';
        connection.query($sql,[cash_in_date, '房费', cash_in_amount],function (err,result) {
            if(err)
            {result = {
                code: 300,
                msg: '写入数据失败'};
                console.log(err)
            }
            else
            {result = {
                code: 200,
                msg: '写入数据成功'}
            }
            res.json(result);
        });
        connection.release();
    })
});
router.post('/manage2post2',function (req,res) {
    var cash_in_date = req.body.guest_in_date;
    var cash_in_amount1 = req.body.guest_pay_b;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'INSERT INTO cash_in(ciid, cash_in_date, cash_in_type, cash_in_amount) VALUES(0, ?, ?, ?)';
        connection.query($sql1,[cash_in_date, '押金', cash_in_amount1],function (err,result) {
            if(err)
            {result = {
                code: 300,
                msg: '写入数据失败'};
                console.log(err)
            }
            else
            {result = {
                code: 200,
                msg: '写入数据成功'}
            }
            res.json(result);
        });
        connection.release();
    })
});
router.post('/manage2post3',function (req,res) {
    var room_type = req.body.room_type;
    var room_amount = req.body.room_amount;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'update room set room_amount =?  where room_type =?';
        connection.query($sql1,[room_amount-1, room_type],function (err,result) {
            if(err)
            {result = {
                code: 300,
                msg: '写入数据失败'};
                console.log(err)
            }
            else
            {result = {
                code: 200,
                msg: '写入数据成功'}
            }
            res.json(result);
        });
        connection.release();
    })
});
module.exports = router;