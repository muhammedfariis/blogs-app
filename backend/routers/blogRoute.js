import {
  creatBlog,
  updateBlog,
  getBlogs,
  deleteBlog,
  singleGet
} from "../../backend/controllers/blogLogic.js"

import express from "express"

const router = express.Router()

router.get("/" , getBlogs)
router.get("/:id" , singleGet)
router.post("/" , creatBlog)
router.put("/:id" , updateBlog)
router.delete("/:id" , deleteBlog)

export default router