export async function getblogses(){
      const datas = await fetch("http://localhost:8000/blogs")
     const res = await datas.json() 
     return res;
}       

export async function creatBlog(title , content) {
      const res = await fetch(
        "http://localhost:8000/blogs" ,
        { method : "POST",
         body : JSON.stringify({title , content}),
         headers:{
            "Content-Type" : "application/json",

         },
        })
        return res
}

export async function getbyid(id) {
   const res = await fetch( `http://localhost:8000/blogs/${id}`)
   const result = await res.json()
     return result 
}

export async function updateBlog(id , title  , content){
   const res = await fetch(`http://localhost:8000/blogs/${id}`,
      {method : "PUT" ,
       body : JSON.stringify({ title , content}),
       headers : {
            "Content-Type": "application/json",
       },
      }
   )
 return res
}

export async function deleteBlog(id){
   const res = await fetch(`http://localhost:8000/blogs/${id}`,
   {
      method : "DELETE"
   }
   )
   const data = await res.json()
   return data
}