const util = require("util");
var mysql = require("mysql2");

// Connect to database
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      port: 3306,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the inventory_db database.`)
  );

  module.exports = connection;
