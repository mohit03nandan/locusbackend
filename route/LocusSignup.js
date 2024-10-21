const { Router } = require("express");
const schema = require("../models/Schema");
const route = Router();


var locusSignup = schema.LocusUserSignup;

route.post('/',(req,res)=>{
        res.send("hello")
})

module.exports = route;
