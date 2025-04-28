//here we can load the data through the apis  fetch this data to this webpage 
//here we create the webpage

import { redirect } from "next/navigation";





export default async function ProductFetch() {
  const res = await fetch("http://localhost:3000/api/item", {
    cache: "force-cache", 
  });
  const data = await res.json();
  if(data.length>3){
    redirect("/");
  }

  return (
    <ul className="text-center mt-8">
      {
        data?.map((singleProduct) => (
          <li key={singleProduct._id}>
            {singleProduct?.ProductName}
          </li>
        ))
      }
    </ul>
  );
}
