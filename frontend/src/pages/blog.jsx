import { useEffect, useState } from "react"
import {Link , useNavigate, useParams} from "react-router-dom"
import { deleteBlog, getbyid } from "../api/blogses"
import "./blog.css"

export default function Blog(){
const navigate  = useNavigate()
const {id} = useParams()
const [loading , setLoading]=useState(true)
const [show , showData] = useState([])

 const load = async ()=>{
   const result = await getbyid(id)
   showData(result.search)
   setLoading(false)
 }


 useEffect(()=>{
   load()
 },[id])

 
 if(loading){
   return(
      <div>loading</div>
   )
 }

 const ondelete  = async()=>{
  await deleteBlog(id)
  navigate("/")
 }

   return(
    <div className="blog_container">
     <div className="title_container">
       <h1>Title</h1>
       <div className="line"></div>
        <h1>{show.title}</h1>
        <div className="edit_div">
           <Link to = "/">back</Link>
        <Link to = {`/blogs/${id}/update`} style={{marginLeft : "10px"}}>
         edit</Link>
        <button onClick={ondelete} style={{marginLeft : "10px"}}>delete</button>
        </div>
        <h1>Contents</h1>
      <div className="contents">
     <p>{show.content}</p>
        
      </div>
     </div>
    </div>
   )
}