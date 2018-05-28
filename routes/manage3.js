var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res) {
    pool.getConnection(function (err,connection) {
        var sql1 = 'SELECT * FROM sell';
        connection.query(sql1, function (err, result, next) {
            string = JSON.stringify(result);
            sells = JSON.parse(string);
            res.render('manage3', {sells:sells});
        });
    })
});
router.post('/manage3post1',function (req,res) {
    var cash_in_date = req.body.guest_in_date;
    var cash_in_amount = req.body.guest_pay;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'INSERT INTO cash_in(ciid, cash_in_date, cash_in_type, cash_in_amount) VALUES(0, ?, ?, ?)';
        connection.query($sql1,[cash_in_date, '商品购买', cash_in_amount],function (err,result) {
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
router.post('/manage3post1_1',function (req,res) {
    var sell_name = req.body.sell_name;
    var sell_amount_a = req.body.sell_amount_a;
    var sell_amount_b = req.body.sell_amount_b;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'update sell set sell_amount =? where sell_name = ?';
        connection.query($sql1,[sell_amount_a-sell_amount_b, sell_name],function (err,result) {
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
router.post('/manage3post2',function (req,res) {
    var cash_out_date = req.body.guest_out_date;
    var cash_out_amount = req.body.guest_pay;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'INSERT INTO cash_out(coid, cash_out_date, cash_out_type, cash_out_amount) VALUES(0, ?, ?, ?)';
        connection.query($sql1,[cash_out_date, '商品采购', cash_out_amount],function (err,result) {
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
router.post('/manage3post2_1',function (req,res) {
    var sell_name = req.body.sell_name;
    var sell_amount_1 = req.body.sell_amount_1;
    var sell_amount_2 = req.body.sell_amount_2;
    var amount1 = parseInt(sell_amount_1);
    var amount2 = parseInt(sell_amount_2);
    var amount = amount1 + amount2;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'update sell set sell_amount = ? where sell_name = ?';
        connection.query($sql1,[amount, sell_name],function (err,result) {
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
router.post('/manage3post3',function (req,res) {
    var cash_out_date = req.body.d1;
    var cash_out_type = req.body.d2;
    var cash_out_amount = req.body.d3;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'INSERT INTO cash_out(coid, cash_out_date, cash_out_type, cash_out_amount) VALUES(0, ?, ?, ?)';
        connection.query($sql1,[cash_out_date, '转账给:'+cash_out_type , cash_out_amount],function (err,result) {
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
router.post('/manage3post4',function (req,res) {
    var cash_out_date = req.body.e1;
    var cash_out_type = req.body.e2;
    var cash_out_amount = req.body.e3;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'INSERT INTO cash_out(coid, cash_out_date, cash_out_type, cash_out_amount) VALUES(0, ?, ?, ?)';
        connection.query($sql1,[cash_out_date, cash_out_type+'退押金' , cash_out_amount],function (err,result) {
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
router.post('/manage3post5',function (req,res) {
    var e5 = req.body.e5;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'update guest set guest_ste =? where gid =?';
        connection.query($sql1,['已结账', e5],function (err,result) {
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
router.post('/manage3post6',function (req,res) {
    var f1 = req.body.f1;
    var f2 = req.body.f2;
    var f3 = req.body.f3;
    var num_before = parseInt(f2);
    var num_after = parseInt(f3);
    var num = num_after + num_before;
    pool.getConnection(function (err,connection) {
        var $sql1 = 'update room set room_amount =? where room_type =?';
        connection.query($sql1,[num, f1],function (err,result) {
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