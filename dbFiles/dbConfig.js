const { Client } = require("pg");
const dbConnect = "putthestringhere";
const config = new Client({
  connectionString: dbConnect,
  ssl: {
    rejectUnauthorized: false,
  },
});

config.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to database");
  }
});
//const { Pool } = require('pg');

//const config1 = new Pool({
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    host: process.env.DB_HOST,
//    port: process.env.DB_PORT,
//    database: process.env.DB_DATABASE,
//  });

module.exports = config;
