import Link from "next/link";

export const getPosts = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}



// getPosts নামের একটি async ফাংশন তৈরি করা হয়েছে।

// এই ফাংশনটি fetch ব্যবহার করে JSONPlaceholder API থেকে ডেটা নিচ্ছে (সব পোস্ট)।

// তারপর সেই ডেটা JSON ফর্ম্যাটে কনভার্ট করে return করছে।

export const metadata = {
    title: "All Posts | Learning Next Js",
    description: "Learning Next Js as Best",
  };



export default  async function posts() {
    const posts = await getPosts ();
  return (
    <div className="gap-8 grid grid-cols-4">
        {
            posts.map((post)=>{
                return(
                    <div className="border border-amber-100 rounded-3xl text-center testing-purpose-css-class text-3xl p-6" key = {post.id}>
                        <p>{post.title}</p>
                        <p>{post.title}</p>
                        <Link className="underline" href={`/posts/${post.id}`}>Details</Link>
                        </div>
                    
                )
            })
        }
    </div>
  )
}



// এটি একটি async React কম্পোনেন্ট (Next.js 13+ বা 14-এর সার্ভার কম্পোনেন্টে async ফাংশন ব্যবহার করা যায়)।

// কম্পোনেন্টের ভেতরে getPosts() কল করে সব পোস্ট ডেটা আনা হয়েছে।

// তারপর সেই ডেটাগুলো <div> এর ভেতর map করে দেখানো হয়েছে।

//this is the data fetching process with fake api
