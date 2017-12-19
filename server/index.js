const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
  require('dotenv').config()

const app = express();
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,


}))

const port = 3005
app.listen(port, () => {
    console.log(`port: ${port} <(^_^)^`);
})