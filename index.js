const db = require("./config/database")
const express = require("express")
const cors = require("cors")

// const corsOptions = {

// }
const port = process.env.PORT || 3794
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log("Server is running on http://localhost:3794")
})

app.get("/", (request, response) => {
  response.send("<a href='api/posts'>API POST &raquo;</a>")
})

app.get("/api/posts", (request, response) => {
  const sql = "SELECT * FROM posts"

  db.query(sql, (error, results) => {
    if (error) throw error
    response.status(200).json({
      status: 200,
      message: "Success",
      data: results
    })
  })
})

app.post("/api/posts", (request, response) => {
  const { pengirim, untuk, kesan, pesan } = request.body
  const sql = "INSERT INTO posts (pengirim, untuk, kesan, pesan) VALUES (?, ?, ?, ?)"
  const values = [pengirim, untuk, kesan, pesan]

  db.query(sql, values, (error, results) => {
    if (error) throw error
    response.status(201).json({
      status: 201,
      message: "Post added!",
      data: results
    })
  })
})

// app.patch("/api/posts", (request, response) => {
//   const { id, pengirim, untuk, kesan, pesan } = request.body
//   const now = new Date()
//   const sql = "UPDATE posts SET pengirim = ?, untuk = ?, kesan = ?, pesan = ?, updatedAt = ? WHERE id_post = ?"
//   const values = [pengirim, untuk, kesan, pesan, now, id]

//   db.query(sql, values, (error, results) => {
//     if (error) throw error
//     response.status(200).json({
//       status: 200,
//       message: "Post updated!",
//       data: results
//     })
//   })
// })

// app.delete("/api/posts", (request, response) => {
//   const id = request.query.id
//   const sql = "DELETE FROM posts WHERE id_post = ?"
//   const value = id

//   db.query(sql, value, (error, results) => {
//     if (error) throw error
//     response.status(200).json({
//       status: 200,
//       message: "Post deleted!",
//       data: results
//     })
//   })
// })

// ---

// app.get("/api/users", (request, response) => {
//   const sql = "SELECT * FROM users"

//   db.query(sql, (error, results) => {
//     if (error) throw error
//     response.status(200).json({
//       status: 200,
//       message: "Success",
//       data: results
//     })
//   })
// })