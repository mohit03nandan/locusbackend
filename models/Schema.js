const mongoose = require("mongoose");

const locusSignup = new mongoose.Schema({
      FullName:{type: String},
      Email:{type: String},
      Password:{type: String}
})

const locusLogin = new mongoose.Schema({
    Email:{type: String},
    Password:{type: String}
});

const LocusUserSignup = mongoose.model("LocusUser", locusSignup);
const LocusUserLogin = mongoose.model("LocusLogin", locusLogin);

var my_schemas = {
    LocusUserSignup: LocusUserSignup,
    LocusUserLogin:LocusUserLogin
  };
  
  module.exports = my_schemas;