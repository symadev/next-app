import dbConnect from "@/lib/bdConnection";
import { ObjectId } from "mongodb";

export async function GET( req,{ params}) {
   

  //here params should be distructure like { params}


    const p = await params;
    console.log(p) 
    const singleData = await dbConnect("Next_2").findOne({_id: new ObjectId(p.id)})
   
    return Response.json(singleData)
  }


  //aitah k use kore amra specific data k niye ashte parbo




  //for delete 
export async function DELETE( req, {params}) {
   
    const p = await params;
    console.log(p) 
   
    return Response.json({ params:p })
  }

   
  
  
  //for update 
  //  export async function PATCH( req, {params}) {
   
  //   const p = await params;
  //   console.log(p) 
   
  //   return Response.json({ params:p })
  // }


  //for update new inserted id data
  export async function PATCH( req, {params}) {

  const p = await params;
  const postedData = await req.json()
  const filter = {_id: new ObjectId(p.id)}
    console.log(p) 
    const updatedResponse = await dbConnect("Next_2").updateOne(filter,{$set:{...postedData}},{upsert:true})
   
    return Response.json(updatedResponse);
  }




  // export async function PATCH(req, { params }) {
  //   এখানে তুমি একটা PATCH HTTP method তৈরি করছো। এটা সাধারণত update করার জন্য ব্যবহার হয়।
    
  //   req মানে হচ্ছে ক্লায়েন্ট থেকে আসা রিকোয়েস্ট।
    
  //   { params } হচ্ছে রাউট থেকে পাওয়া ডায়নামিক প্যারামিটার (যেমন id) — এটা destructure করে নেওয়া হয়েছে।
    
    
  //     const p = await params;
  //   এখানে তুমি params কে আলাদা করে p নামের ভেরিয়েবলে রাখছো।
    
  //   আসলে await এখানে দরকার নেই, কারণ params তো একটা সাধারণ object, এটা asynchronous না।
    
  //   শুধুমাত্র লিখলে const p = params; তাও ঠিক থাকত।
    
  //   t
  //     const postedData = await req.json()
  //   এখানে রিকোয়েস্টের বডি (মানে ক্লায়েন্ট যেই ডাটা পাঠাইছে) সেটাকে JSON ফরম্যাটে পাঠ করে postedData নামে রাখতেছো।
    
  //   উদাহরণ: যদি ফ্রন্টএন্ড থেকে { name: "New Name" } পাঠায়, তাহলে postedData হবে { name: "New Name" }।
    
    
  //     const filter = { _id: new ObjectId(p.id) }
  //   তুমি মোংগোডিবিতে কোনো ডকুমেন্টকে খুঁজে বের করার জন্য একটা ফিল্টার বানাইতেছো।
    
  //   এখানে p.id কে ObjectId (MongoDB এর ফরম্যাট) এ কনভার্ট করে _id দিয়ে খুঁজবে।
    
  //   MongoDB তে _id সবসময় ObjectId টাইপের হয়।
    
  //   
  //     console.log(p)
  //   এটা শুধু ডিবাগিং এর জন্য — দেখতে চাইতেছো p এর ভেতরে কি আছে কনসোল লগ করে।

  //     const updatedResponse = await dbConnect("Next_2").updateOne(
  //       filter,
  //       { $set: { ...postedData } },
  //       { upsert: true }
  //     )
  //   এখানে তুমি dbConnect কল করে "Next_2" নামে কোনো কালেকশনে কানেক্ট করতেছো।
    
  //   তারপর .updateOne() মেথড দিয়ে আপডেট করতেছো।
    
  //   filter: কোন ডকুমেন্ট আপডেট করবে (মানে যেটার _id মিলে)।
    
  //   $set: {...postedData}: মানে যেই নতুন ডাটা পাঠানো হইছে, তা সেই ডকুমেন্টে বসাবে।
    
  //   { upsert: true }: যদি ওই _id এর কোনো ডকুমেন্ট না থাকে, তাহলে নতুন ডকুমেন্ট বানায়ে ফেলবে (update + insert = upsert)।
    
   
  //     return Response.json(updatedResponse);
  //   }
  //   অবশেষে, আপডেটের পর যে রেসপন্স (updatedResponse) আসছে সেটা JSON আকারে ক্লায়েন্টকে পাঠিয়ে দিচ্ছো।
    
    


