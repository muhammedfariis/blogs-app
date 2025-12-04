import mongoose from "mongoose";
const connectDB = async ()=>{
  await mongoose.connect("mongodb://localhost:27017/mydb")
  .then(()=>{
    console.log("mongoDB connected");
    
  })

  .catch((err)=>{
    console.log("mongo connection failed" , err);
  })
}

export default connectDB