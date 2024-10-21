const express = require('express');
const databaseconnection = require('./configuration/database');
const app = express();

databaseconnection();










const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost"
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})
