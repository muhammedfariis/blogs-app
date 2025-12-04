import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import {getblogses} from "../api/blogses";
import "./update.css"


export default function Blogs(){
    const [loading , setloading]= useState(true)
    const [blog , setblog] = useState([])
    const load = async ()=>{
        const set = await getblogses()
        setblog(set.findBlog)    
        setloading(false) 
        
    }
    useEffect(()=>{
     load()
    },[])

    if(loading){
        return(
            <div><h1>Loading</h1></div>
        )
    }

    return(
        <div className="blog_container">
            <div className="viewer">
              <h1>MY-BLOG</h1>
            <button>
             <Link to = "/blogs/create">create</Link>
                
            </button>
               {blog.map((vlog)=>(
                 <Link key={vlog._id} to = {`/blogs/${vlog._id}`}>{vlog.title}</Link>
               ))}
                </div>
           
            </div>
            
            
    )
}

