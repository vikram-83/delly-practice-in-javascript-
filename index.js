const express = require("express");
const { connecToMongooseDB} = require("./connect");
const urlRoute = require("./routes/url");
const app = express.json();
const PORT = 8001;


app.listen(PORT , ()=>{
    console.log(`server started at PORT`)
})