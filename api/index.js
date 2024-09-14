const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./db')
const userRoutes = require('./routes/userRoute')
const authRoutes = require('./routes/authRoute')

connectDB(process.env.MONGO_URI)

const app = express()
const port = 3000

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// ROUTES
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})


app.listen(port, () => console.log(`Server running on port ${port}!`))