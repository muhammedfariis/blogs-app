import express from "express"
import cors from "cors"
import router from "./backend/routers/blogRoute.js"
import connectDB from "./backend/config/connectDb.js"
const app = express()

app.use(express.json())
app.use(cors())
app.use("/blogs" , router)

connectDB()

app.listen(8000 ,()=>{
   console.log("server running at  local host 5000");
   
})