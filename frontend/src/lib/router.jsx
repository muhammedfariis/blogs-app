import { createBrowserRouter } from "react-router-dom";
import Blogs from "../pages/blogs";
import Blog from "../pages/blog";
import Update from "../pages/blogUpdate";
import Create from "../pages/blogCreat";

const router = createBrowserRouter([
  {
    path: "/",          // Home page → show all blogs
    element: <Blogs />
  },
  {
    path: "/blogs/:id", // Single blog page
    element: <Blog />
  },
  {
    path: "/blogs/:id/update", // Update blog
    element: <Update />
  },
  {
    path: "/blogs/create", // Create blog
    element: <Create />
  },
]);

export default router;
