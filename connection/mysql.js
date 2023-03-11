const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "172.26.16.1",
    port: 3306,
    user: "root",
    password: "12345",
    database: "pessoas"
})

connection.connect((err)=>{
    if(err) throw err
    console.log("connected to database")
})


module.exports = connection