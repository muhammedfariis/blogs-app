import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
title :{
    type : String ,
    required : true
},
content : {
    type : String ,
    required : true 
}

},{timestamps : true})

const blog = mongoose.model("blogs" , blogSchema)

export default blog