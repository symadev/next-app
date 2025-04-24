




export const getSinglePosts = async (post_id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json();
    return data;
}


export default  async function SinglePosts({params}) {
    const p = await params;
   const SinglePosts = await getSinglePosts(p.id)
  return (
    <div className="border border-amber-100 rounded-3xl text-center text-3xl p-6" >SinglePost :{JSON.stringify(SinglePosts)} </div>
  )
}
