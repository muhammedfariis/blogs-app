import { Link, useNavigate } from "react-router-dom";
import { creatBlog } from "../api/blogses";
import "./create.css"

 export default function Create(){
    const navigate = useNavigate()
    const creat = async (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const res =  await creatBlog(title , content)
        console.log(res);
        navigate("/")
        
    }
    return(
        <form className="blog_container" onSubmit={creat}>
            <div className="formses">
               <h1>Creat blog</h1>
               <button>
            <Link to = "/"> back</Link>
                 
               </button>
            <br />
            <label htmlFor="title"></label>
            <br />
            <input id="title" name="title"  type="text" placeholder="title" />
            <br />
            <label htmlFor="content"></label>
            <br />
            <input id="content" name="content"  type="text" placeholder="content" />
            <br />
            <input type="submit" value= "Create"/>
            </div>
           
        </form>
    )
 }