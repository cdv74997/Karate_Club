const config = require("./dbConfig");

async function getCourses() {
  config.query("SELECT * FROM Courses", (err, res) => {
    if (err) {
      console.error(err);
      console.log("error");
    } else {
      console.log(res.rows);
      courses = res;
      console.log("correct");
    }
  });
}

async function getCourseFromDate(date) {
  return new Promise((resolve, reject) => {
    config.query(
      "SELECT * FROM Courses WHERE courses.start_date = $1",
      [date],
      (err, res) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(res.rows);
        }
        config.end();
      }
    );
  });
}

async function fetchCourses() {
  try {
    const coursesFromDate = await getCourseFromDate("2022-03-06T08:00:00.000Z");
    console.log(coursesFromDate);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getCourses, fetchCourses };
