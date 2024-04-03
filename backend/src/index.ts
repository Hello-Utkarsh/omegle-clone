import { Request, Response } from "express"
import dbConnect from './database/db'
import User from "./database/Schema"
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

dbConnect(process.env.Connection_URL)


app.use('/user', require('./user/UserEndpoints'))
let a = User

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})