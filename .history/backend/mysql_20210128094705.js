const mysql = require('mysql');


var pool = mysql.createPool({

    "user": process.env.MYSQL_USER,
    "password": process.env


})