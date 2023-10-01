const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
let DB_URL = process.env.DB_URL || "";
mongoose.connect(DB_URL, {});
mongoose.connect(DB_URL, {});
const db = mongoose.connection;
db.on("error", () => {
    console.log("Error Connecting to DB");
});
db.once("open", function () {
    console.log("DB Connected successfully!!");
});
//# sourceMappingURL=connect.js.map