const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./db')
const userRoutes = require('./routes/userRoute')

connectDB(process.env.MONGO_URI)

const app = express()
const port = 3000

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// ROUTES
app.use('/api/user', userRoutes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server running on port ${port}!`))