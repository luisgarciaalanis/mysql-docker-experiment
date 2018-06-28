const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  
  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
  