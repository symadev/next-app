//this is access the data from database and load the data to the postman api


import dbConnect from "@/lib/bdConnection";
import { revalidatePath } from "next/cache";

export async function GET() {

  const data = await dbConnect("Next_2").find({}).toArray()

return Response.json( data )
}
 

// for post the data

export async function POST(req) {

  const postData = await req.json();
  //after that we post the data through api client
  const result = await dbConnect("Next_2").insertOne(postData)
revalidatePath("/products")

  return Response.json(result);
}

// for post data the data use can use a api client