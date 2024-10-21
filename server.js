const express = require('express');
const cookieParser = require('cookie-parser');
const locusSignup = require("./route/LocusSignup");
const databaseconnection = require('./configuration/database');
const app = express();

databaseconnection();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/locusSignup", locusSignup);


app.get("/check" ,(req,res) =>{
    res.send(`backend server is active status: active & time:${ new Date()}`)
})


const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost"
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})
