const express = require("express")
const User = require("../../models/User/User.js")
const createUserToken = require("../utils/createUserToken.js")

const registerUser = async (req, res) => {
    try {
        const { fname, lname, dob, email, phoneno, password, userType } = req.body;

        const user = await User.find({
            $or: [{email}, {phoneno}]
        })
      
        if (user.length>0) {
            return res.status(404).json({
                status: true,
                code: 404,
                message: "There is already a user for email/phoneno",
            })
        }

        const userData = new User({
            fname, lname, dob, email, phoneno, password, userType
        })
        const newUser = await userData.save()

        return res.status(200).json({
            status: true,
            code: 200,
            message: "user successfully registered",
            data: newUser
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            code: 500,
            message: 'Something went wrong',
            data: error.message,
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: false,
                code: 404,
                message: "Invalid email address",
            })
        }

        const isPasswordCorrect = await user.comparePassword(password)
        if (!isPasswordCorrect) {
            return res.status(404).json({
                status: false,
                code: 404,
                message: "Invalid password",
            })
        }

        const token = await createUserToken(user);

        if (!token) {
            return res.status(200).json({
                status: false,
                code: 400,
                message: 'Error in token genration',
            });
        }

        return res.status(200).json({
            status: true,
            code: 200,
            message: 'login successful',
            data: user,
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            code: 500,
            message: 'Something went wrong',
            data: error.message,
        });
    }
}

module.exports = { loginUser, registerUser }