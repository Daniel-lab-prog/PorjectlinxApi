const mysql = require('mysql');


var pool = mysql.createPool({

    "user": process.env


})