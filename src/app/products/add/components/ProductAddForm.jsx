"use client";

import { useRouter } from "next/navigation";

//we here load the data of the from
export default  function ProductAddForm() {
    const router = useRouter()
    const handleSubmit = async (e)=>{
     e.preventDefault();
     const form = e.target;
     const ProductName = form.ProductName.value;
     const payload = { ProductName};
     const response = await fetch('http://localhost:3000/api/item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    const result = await response.json();
    console.log( result)
    router.push ('/products');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="ProductName" placeholder='Product Name' />
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}


// ইউজার একটা প্রোডাক্টের নাম লিখে Submit চাপবে।

// ব্রাউজারে থেকে ডেটা API এর মাধ্যমে backend এ যাবে।

// ব্যাকেন্ডে (তোমার /api/item ফাইল) সেটা MongoDB বা কোনো ডাটাবেজে সেভ হবে।

// এরপর রেসপন্স (যেমন success message বা new item) ইউজার দেখবে (console এ)।