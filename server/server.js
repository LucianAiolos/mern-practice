const express = require('express') 
const { default: mongoose } = require('mongoose')
const router = require('./routes/memberRoutes')
// const mongodb = require('mongodb') dont' need this here.
require('dotenv').config()
mongoose.set('strictQuery', false) // need this to clear warnings.

const app = express()

const PORT = process.env.PORT 
const DB_URI = process.env.ATLAS_URI

// Check mongodb connection
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> {
    console.log("Connected to DB")
  })

  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(router)

app.listen(PORT, ()=> console.log('Listening on port ', PORT))

// console.log(process.env.ATLAS_URI)

