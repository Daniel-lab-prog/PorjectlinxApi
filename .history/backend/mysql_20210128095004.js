const mysql = require('mysql');


var pool = mysql.createPool({

    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "DataBases": process.env.MYSQL_DATABASES,
    "HOST": process.env.MYSQL_HOST,
    "PORT": process.env.MYSQL_


})