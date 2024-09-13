const express = require('express')
require('dotenv').config()
const connectDB = require('./db')

connectDB(process.env.MONGO_URI)

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server running on port ${port}!`))