import connToDB from "@/database";
import { NextResponse } from "next/server";

const { Asul } = require("next/font/google");

export async function DELETE(req) {
  try {

    await connToDB();
    const {searchParams}= new URL(req.url);
    const currentBlogId= searchParams.get('id')
    console.log(currentBlogId);  
} catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
