import connToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connToDB();
    const extractdata = await req.json();

    const newlyCreatedBlogData = await Blog.create(extractdata);
    if (newlyCreatedBlogData) {
      return NextResponse.json({
        sucess: true,
        message: "Added Successfully",
      });
    } else {
      return NextResponse.json({
        sucess: false,
        message: "Failed to add to DB",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      sucess: false,
      message: "Something went wrong!",
    });
  }
}
