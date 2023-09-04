const express = require("express");
const app = express();
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const { notFound, errorHandler } = require("./middlewares/errorHandles");

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/user', authRouter);

app.use(notFound);
app.use(errorHandler)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
