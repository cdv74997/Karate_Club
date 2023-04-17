const config = require('./dbConfig');
const sql = require('mssql');

const getCourses = async() => {
    try {
        console.log('test');
        let pool = await sql.connect(config);
        console.log('test2');
        let courses = pool.request().query("SELECT * from Course");
        console.log(courses);
        console.log('test');
        return courses;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { getCourses }