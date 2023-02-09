const express = require("express");
const cors = require("cors")
require("./db/Connection.js")
const Note = require("./db/Module/AddNote");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/addnote",async(req,res)=>{
    console.log(req.body);
    try{
        const note = new Note(req.body);
        const createUser = await note.save();
        res.send("added Succesfully");
    }
    catch(e){
        res.send(e);
    }
})

app.get("/getnote",async(req,res)=>{
    let result = await Note.find();
    if(result.length>0)
    {
      console.log(result);
      res.send(result);
    }
    else{
      res.send("No Data available");
    }
    })

app.get("/updatenote/:id",async(req,res)=>{
    let result = await Note.findOne({_id:req.params.id});
    res.send(result);
})


app.put("/updatenote/:id",async(req,res)=>{
    let result = await Note.updateOne(
     {_id:req.params.id},
     {
       $set:req.body
     }
     )
     res.send(result);
 })

app.delete("/note/:id",async(req,res)=>{
    let result = await Note.deleteOne({_id:req.params.id})
    res.send(result);
})
app.listen(5000);