var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config');
var pool = mysql.createPool(config.mysql);
router.get('/', function(req, res) {
    pool.getConnection(function (err,connection) {
        var sql1 = 'SELECT * FROM cash_out';
        connection.query(sql1, function (err, result, next) {
            string = JSON.stringify(result);
            sells = JSON.parse(string);
            res.render('backfront2', {sells:sells});
        });
    })
});
module.exports = router;