const mongoose = require("mongoose");

const locusSignup = new mongoose.Schema({
      name: { type: String },
      email: { type: String },
      password:{type:String}
})


const LocusUserSignup = mongoose.model("LocusUser", locusSignup);


var my_schemas = {
    LocusUserSignup: LocusUserSignup,
  };
  
  module.exports = my_schemas;