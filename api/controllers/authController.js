const User = require("../models/userModel")
const bcrypt = require('bcryptjs')
const { appError } = require("../utils/error")

exports.signup = async (req, res, next) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    // const newUser = new User({ username, email, password: hashedPassword })

    try {
        // await newUser.save()
        const checkUser = await User.findOne({ username: req.body.username })
        if (checkUser) {
            return next(appError(400, "Username already exists"))
        }

        const checkEmail = await User.findOne({ email: req.body.email })
        if (checkEmail) {
            return next(appError(400, "Email already exists"))
        }
        const user = await User.create({ ...req.body, password: hashedPassword })
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        next(error)
    }
}