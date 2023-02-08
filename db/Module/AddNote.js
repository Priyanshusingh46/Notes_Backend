const mongoose = require("mongoose");
const AddNote = new mongoose.Schema({
    tittle:{
        type:String,
        require:true,
        unique:true,
    },
    description:{
        type:String,
        require:true,
    }
})

const Addnote = mongoose.model("Note",AddNote);
module.exports = Addnote;