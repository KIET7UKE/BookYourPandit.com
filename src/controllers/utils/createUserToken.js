const jwt = require("jsonwebtoken");
let JWT_SECRET = process.env.JWT_SECRET || "";
async function createUserToken(user) {
    try {
        const token = jwt.sign( {user}, JWT_SECRET);
        return token;
    }
    catch (error) {
        return false;
    }
}

    module.exports = createUserToken;