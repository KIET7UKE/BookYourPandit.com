const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please provide first name"]
    },
    lname: {
        type: String,
        required: [true, "Please provide last name"]
    },
    dob: {
        type: String,
        required: [true, "Please provide date of birth"]
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true
    },
    phoneno: {
        type: Number,
        required: [true, "Please provide phone no."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide password"]
    },
    userType: {
        type: String,
        required: true,
        enum: ["user", "pandit"],
        // default: "user"
    }
})

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword,this.password)
    return isMatch;
}

const User = mongoose.model("User", userSchema)

module.exports = User;