const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees'
    });

connection.connect((err) => {
    if (err) {
    throw err;
    console.log("Error connecting to database")
    }
});
