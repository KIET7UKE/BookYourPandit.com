const express = require("express")
const router = express.Router()
const {loginUser, registerUser} = require("../../controllers/User/userController.js")

router.post("/api/user/register",registerUser);

router.post("/api/user/login",loginUser)

module.exports = router
