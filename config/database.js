// require mysql
const db = require("mysql")

// create connection
const connection = db.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tinta-sekolah",
  charset: "utf8mb4",
  timezone: "+07:00"
})

// connect to database
connection.getConnection((err) => {
  if (err) throw err
  console.log("Database connected!")
})

// export connection
module.exports = connection