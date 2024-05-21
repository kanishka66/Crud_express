
const mongoose=require("mongoose");

const NoteSchema = mongoose.Schema({
    title:{
        type: String,
        
    },
     description:{
        type: String,
        
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    }
},{timeStamps: true});

module.exports=mongoose.model("Note",NoteSchema);