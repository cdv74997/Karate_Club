const config = require("./dbConfig");

//commenting this out because it closes the connection and then i cant query
// async function getCourses() {
//   config.query("SELECT * FROM Courses", (err, res) => {
//     if (err) {
//       console.error(err);
//       console.log("error");
//     } else {
//       console.log(res.rows);
//       console.log("correct");
//     }
//     config.end();
//   });
// }

async function getCourseFromDate(date) {
  console.log("date" + date);
  return new Promise((resolve, reject) => {
    config.query(
      "SELECT * FROM Courses WHERE courses.day = $1",
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

async function fetchCourses(day) {
  try {
    const coursesFromDate = await getCourseFromDate(day);
    console.log("day" + day);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { fetchCourses };
