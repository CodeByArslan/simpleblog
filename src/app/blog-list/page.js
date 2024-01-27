import BlogListComponent from "@/components/blog/list";

async function fetchAllBlogs() {
  console.log("fetching");
  const response = await fetch("http://localhost:3000/api/blog/get-all-blogs", {
    method: "GET",
    cache: "no-store",
  });
  
  const result = await response.json();
  if (result?.success) return result.data;
}

export default async function BlogList() {
  const getAllBlog = await fetchAllBlogs();
  console.log(getAllBlog);
  return (
    <div className="flex min-h-screen flex-col p-8">
      <h1 className="font-bold text-lg mb-5">Blog List</h1>
      <BlogListComponent getAllBlog={getAllBlog}/>
    </div>
  );
}
