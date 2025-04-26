




export const getSinglePosts = async (post_id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json();
    return data;
}

// we can import here through metadata
export async function generateMetadata({ params, }) {
  const id = (await params).id;
 
  // fetch post information
  const SinglePosts = await getSinglePosts(id);
  
 
  return {
    title: SinglePosts .title,
    keywords: ['Next.js', 'React','Learning','Playground', 'JavaScript'],
    description: SinglePosts .description,
  }
}


export default  async function SinglePosts({params}) {
    const p = await params;
   const SinglePosts = await getSinglePosts(p.id)
  return (
    <div className="border border-amber-100 rounded-3xl text-center text-3xl p-6" >SinglePost :{JSON.stringify(SinglePosts)} </div>
  )
}
