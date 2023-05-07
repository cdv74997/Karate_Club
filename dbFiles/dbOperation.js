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

async function fetchCourses(day, date) {
  try {
    const res = await config.query("SELECT name, instructor, start_time, end_time FROM courses WHERE day + 1 = $1", [day]);
    return res.rows.map(row => ({
      name: row.name,
      instructor: row.instructor,
      startTime: row.start_time,
      endTime: row.end_time
    }));
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getCourses, fetchCourses }