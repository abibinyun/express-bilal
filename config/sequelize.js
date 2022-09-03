const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const sequelize = new Sequelize({
//   database: process.env.DATABASE,
//   host: process.env.HOST,
//   username: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   dialect: process.env.DIALECT,
// });

const sequelize = new Sequelize({
  database: "1ZNFMZwwDF",
  host: "remotemysql.com",
  username: "1ZNFMZwwDF",
  password: "CmYmkUFzfc",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been estabilished successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
