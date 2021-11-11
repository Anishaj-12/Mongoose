const express=require('express')
const app=express()
const mongoose = require("mongoose");

const mongoURI="mongodb+srv://anishaj8:<password>@cluster0.thkwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(express.json());


app.use('/persons', require('./routes/personRoutes'));


mongoose.connect(
    "mongodb+srv://anishaj8:<password>@cluster0.thkwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    err => {
        if (err) throw err;
        console.error("Database connected");
    }
);



const port=5000
app.listen(port,(err)=>{
    err ? console.log(err)  : console.log('It is running')
})