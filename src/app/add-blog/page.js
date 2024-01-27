"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const initialFormData = {
  title: "",
  description: "",
};
export default function AddBlog() {
  const [blogFormData, setBlogFormData] = useState(initialFormData);
  const router = useRouter();
  // console.log('=======================');
  // console.log(blogFormData);
  // console.log('=======================');

  //handelAddBlog
  async function handleAddBlog() {
    const response = await fetch("/api/blog/add-new-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogFormData),
    });

    const result = await response.json();

    // console.log(result);
    // if (result.success) {
    //   setBlogFormData(initialFormData);
    //   router.push("/blog-list");
    // }
    setBlogFormData(initialFormData);
    router.push("/blog-list");
  }

  return (
    <div className="flex min-h-screen flex-col p-8">
      <h1 className="font-bold text-lg mb-2">Add a new Blog</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label>Enter blog title:</label>
          <input
            className="border border-red-500 p-1  outline-none"
            name="title"
            placeholder="Enter blog title..."
            value={blogFormData["title"]}
            onChange={(e) =>
              setBlogFormData({
                ...blogFormData,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Enter blog description:</label>
          <textarea
            rows={5}
            className="border border-red-500 p-1  outline-none"
            name="description"
            placeholder="Enter blog description..."
            value={blogFormData["description"]}
            onChange={(e) =>
              setBlogFormData({
                ...blogFormData,
                description: e.target.value,
              })
            }
          />
        </div>
        <div>
          <button
            onClick={handleAddBlog}
            className="border border-red-500 p-4 bg-black text-white"
          >
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
}
