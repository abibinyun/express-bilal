const mysql = require("mysql");
require("dotenv").config();

// const connection = mysql.createConnection({
//   host: "remotemysql.com",
//   user: "1ZNFMZwwDF",
//   password: "CmYmkUFzfc",
//   database: "1ZNFMZwwDF",
// });

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = connection;
