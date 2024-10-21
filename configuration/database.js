const mongoose = require('mongoose')
const dotenv = require('dotenv');


function databaseconnection(){
    dotenv.config();
    const mongoUrl = process.env.MONGODB_URI;
    mongoose.set('strictQuery', false);

    mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
   .then(() => console.log('MongoDB Connected successfully...')).catch((err) => {
    console.log("Database Not Connected Successfully : " + err);
});
}


module.exports = databaseconnection;
