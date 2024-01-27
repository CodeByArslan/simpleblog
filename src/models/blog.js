import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: String,
    description: String
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
