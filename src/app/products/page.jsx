//here we can load the data through the apis  fetch this data to this webpage 
//here we create the webpage



export default  async function ProductFetch() {
    const  res = await fetch("http://localhost:3001/api/item")
    const data = await res.json();

  return (
    <div><p>
        {JSON.stringify(data)}</p></div>
  )
}
