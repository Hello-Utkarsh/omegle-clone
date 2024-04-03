import { Request, Response } from "express"
import User from "../database/Schema"
const express = require('express')
const router = express.Router()
const app = express()


router.get('/login', (req: Request, res: Response) => {
    console.log('login')
})

router.get('/create', (req: Request, res: Response) => {
    console.log('signin')
})

module.exports = router