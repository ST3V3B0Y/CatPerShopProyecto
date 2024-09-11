import express from "express";
import {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogController.js";
export const BlogRouter = express.Router();

BlogRouter.get("/", getAllBlogs);
BlogRouter.get("/:id", getBlog);
BlogRouter.post("/", createBlog);
BlogRouter.put("/:id", updateBlog);
BlogRouter.delete("/:id", deleteBlog);
