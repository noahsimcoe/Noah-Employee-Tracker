const mysql = require('mysql2');
require("dotenv").config();

// connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees'
    },
    console.log("connected to the employees database")
);

module.exports = db;
