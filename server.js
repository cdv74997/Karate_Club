const express = require("express");
const dbOperation = require("./dbFiles/dbOperation");
const cors = require("cors");

const API_PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get("/api/data/:date", async (req, res) => {
  try {
    const data = await dbOperation.fetchCourses(req.params.input);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
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

// try {
//   console.log("hello");
//   dbOperation.fetchCourses(5).then((res) => {
//     console.log(res);
//   });
// } catch (error) {
//   console.error(error);
// }

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
