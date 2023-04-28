const config = require('./dbConfig');



async function getCourses() {
  config.query('SELECT * FROM mytable', (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows);
    }
    config.end();
  });
  }

module.exports = { getCourses }