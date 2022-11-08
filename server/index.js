const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const PORT = 8000
const app = express()

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${8000}`))
  } catch (error) {
    console.log(error)
  }
}

start()
