const mongoose = require("mongoose");
const DB = "mongodb+srv://Priyanshu:priya123@cluster0.7xy5met.mongodb.net/?retryWrites=true&w=majority"
const connectDB = mongoose.connect(DB).then(()=>{
    console.log("connection succesfull")
}).catch((err)=>{
    console.log("no connection");
})

module.exports = connectDB;