const express = require('express');
const dbOperation = require('./dbFiles/dbOperation');
const cors    = require('cors');
const { fetchCourses } = require('./dbFiles/dbOperation');
//
//const API_PORT = process.env.PORT || 5000;
//const app = express();
//app.use(cors());
//
//app.get("/api", function(req, res) {
//    console.log('Called');
//    res.send({result: "Hello"})
//})
//
//app.get("/quit", function(req, res) {
//    console.log('Called quit');
//    res.send({result: "Good Bye"})
//})

try {
    dbOperation.getCourses().then(res => {
      console.log(res);
    });
  } catch (error) {
    console.error(error);
  }


  (async () => {
    // Replace the day and date variables with your desired values
    const day = 5; // Monday
    const date = new Date('2023-05-09'); // May 9, 2022
  
    const courses = await fetchCourses(day, date);
  
    console.log(courses);
  })();
//app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));