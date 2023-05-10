// const { Client } = require("pg");
// const dbConnect =
//
// const config = new Client({
//   connectionString: dbConnect,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// config.connect((err) => {
//   if (err) {
//     console.error("connection error", err.stack);
//   } else {
//     console.log("connected to database");
//   }
// });

// module.exports = config;

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "",
});

module.exports = pool;
