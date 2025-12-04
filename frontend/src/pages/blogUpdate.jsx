import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  getbyid, updateBlog } from "../api/blogses";
import "./update.css"

    export default function Update(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [loading , setLoading]=useState(true)
    const [show , showData] = useState({})
     const load = async ()=>{
       const result = await getbyid(id)
       showData(result)
       setLoading(false)
     }
    

        useEffect(()=>{
            load()
        },[])

        if(loading){
            return (
                <div>loading</div>
            )
        }
   
    const updated = async (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const res =  await updateBlog(id ,title , content)
        console.log(res);
        navigate("/")
        
    }

    return(
        <form className="blog_container" onSubmit={updated}>
            <div className="formses">
            <h1>Edit blog</h1>
            <Link to = {`/blogs/${id}/update`}></Link>
            <div>
               <button>
                <Link to= "/">back</Link>

               </button>
            </div>
            <br />
            <label htmlFor="title"></label>
            <br />
            <input name="title" type="text"  defaultValue={show.title} />
            <br />
            <label htmlFor="content"></label>
            <br />
            <input name="content" type="text"  defaultValue={show.content}/>
            <br />
            <input className="updatebutton" type="submit" value= "Update" />
            </div>
           
        </form>
    )
}