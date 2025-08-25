const mongoose= require("mongoose")

const lmsSchema= new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    author:{
         type: String,
        required: true
    },
    catagory:{
         type: String,
        default:"uncategorize"
    },
    content:{
        type: String,
        required: true
    },
    status:{
       type:String,

    },
    image:{
        type: String,
default:"https://img.freepik.com/free-photo/pnga-stack-books-isolated-white-background_185193-164139.jpg"    }
})



const Model = mongoose.model("LMS", lmsSchema);
module.exports = Model;