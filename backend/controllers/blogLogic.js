import Blog from "../models/blogDb.js";

// creat blogs 

export const creatBlog = async (req , res)=>{
    try{
        const {title , content} = req.body
        if(!title || !content){
            return res.status(401).json({messege : 'not found'})
        }

        const find = await Blog.findOne({title})

        if(find){
            return res.status(401).json({messege : 'change title please title already find'})
        }
        const creat = await Blog.create({
            title ,
            content
       })

        if (!creat){
            return res.status(400).json({messege : 'not created'})
        }

        return res.status(201).json({
            messege : "title and contend creation succeed",
            id : creat._id ,
            title : creat.title ,
            content : creat.content
        })

    }catch(err){
        return res.status(500).json({messege : "internal server errror -500" , err})
    }
}

//  get all blogs 

export const getBlogs = async (req , res)=>{
    try{

        const findBlog = await Blog.find()

        if(!findBlog){
            return res.status(400).json({messege :"not found in database"})
        }

        return res.status(200).json({
            messege : "all titles and contend succeed",
            findBlog 
        })

    }catch(err){
        return res.status(500).json({messege : "internal server errrr - 500" , err})
    }
}

// updateblog

export const updateBlog = async (req , res)=>{
    try{

        const {title , content} = req.body
        if(!title || !content){
          return res.status(400).json({messege : "not found"})
        }

        const edit = await Blog.findByIdAndUpdate(
           req.params.id,
           {title , content},
           {new : true}
        )

        if(!edit){
            return res.status(400).json({messege : "updatefailed"})
        }

        return res.status(200).json({
            messege : "updation succeed",
            edit
        })
    }catch(err){
        return res.status(500).json({messege : "internal server error - 500" , err})
    }
}

// deleting the blog 

export const deleteBlog = async (req , res)=>{
    try{

        const remove = await Blog.findByIdAndDelete(
            req.params.id,
            req.body
        )
     if(!remove){
        return res.status(400).json({messege : "blog deletation failed"})
     }

     return res.status(200).json({
        messege : "deletation completed",
        remove
     })

    }catch(err){
        return res.status(500).json({messege : 'internal server error - 500' , err})
    }
}

export const singleGet = async(req , res)=>{
    try{
          const search = await Blog.findById(
        req.params.id
    )

    if(!search){
        return res.status(400).json({messege : 'not founded'})
    }

    return res.status(200).json({
        messege : "get succeed by id",
        search
    })
    }catch(err){
        return res.status(500).json({messege : 'internal server errror -500',err})
    }

}