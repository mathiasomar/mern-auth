const mongoose = require('mongoose')

const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri)
            .then(() => console.log("Connected to mongoDB"))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB