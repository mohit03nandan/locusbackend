const { Router } = require("express");
const schema = require("../models/Schema");
const route = Router();


var LocusUserLogin = schema.LocusUserLogin;

route.post('/',(req,res)=>{
        res.send("hello")
})

module.exports = route;