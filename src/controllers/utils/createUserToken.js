import jwt from "jsonwebtoken";
let JWT_SECRET = process.env.JWT_SECRET || "";
async function createUserToken(user) {
    try {
        const token = jwt.sign(Object.assign({}, user), JWT_SECRET);
        return token;
    }
    catch (error) {
        console.log("error :", error);
        return false;
    }
}

module.exports = { createUserToken };