const config = require('./dbConfig');



async function getCourses() {
  config.query('SELECT * FROM Courses', (err, res) => {
    if (err) {
      console.error(err);
      console.log('error');
    } else {
      console.log(res.rows);
      console.log('correct');
    }
    config.end();
  });
  }

module.exports = { getCourses }