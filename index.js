const dotenv =  require('dotenv');
const express =  require('express');
const cors =  require('cors');
const bodyParser =  require('body-parser');
require('./src/config/connect.js');
const errorMiddleware = require("./src/middlewares/errorMiddleware.js")
const userRoutes = require("./src/routes/User/userRoutes.js")

const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors({
    origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorMiddleware);
app.use([userRoutes])

app.listen(PORT, () => console.log('Server is running on PORT : ' + PORT));
