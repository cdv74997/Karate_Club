// const { Client } = require("pg");
// const dbConnect =
//   "postgres://vjrezkqm:kLQQb4W5qcvm6LQ7bXmS_R9PIVoAKZLS@salt.db.elephantsql.com/vjrezkqm";
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
