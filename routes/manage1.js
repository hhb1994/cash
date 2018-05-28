var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res) {
    pool.getConnection(function (err,connection) {
        var sql1 = 'SELECT * FROM room';
        connection.query(sql1, function (err, result, next) {
            string = JSON.stringify(result);
            rooms = JSON.parse(string);
            res.render('manage1', {rooms:rooms});
        });
    })
});
router.post('/manage1post',function (req,res) {
    var guest_name = req.body.guest_name;
    var guest_room_type = req.body.guest_room_type;
    var guest_id = req.body.guest_id;
    var guest_tel = req.body.guest_tel;
    var guest_in = req.body.guest_in;
    var guest_out = req.body.guest_out;
    var guest_pay_a = req.body.guest_pay_a;
    var guest_pay_b = req.body.guest_pay_b;
    var guest_do = req.body.guest_do;
    var guest_note = req.body.guest_note;
    console.log(guest_name);
    pool.getConnection(function (err,connection) {
        var $sql = 'INSERT INTO guest(gid, guest_name, guest_room_type, guest_id, guest_tel, guest_in, guest_out, guest_pay_a, guest_pay_b, guest_do, guest_note, guest_ste) VALUES(0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query($sql,[guest_name, guest_room_type, guest_id, guest_tel, guest_in, guest_out, guest_pay_a, guest_pay_b, guest_do, guest_note, '入住中'],function (err,result) {
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