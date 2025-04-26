"use client";

import { useState } from "react";

// Next.js এ metadata হলো server-side only কনসেপ্ট।
//  আর "use client" মানে হলো এই ফাইলটা ক্লায়েন্ট-সাইডে রান হবে।


// export const metadata = {
//   title: "Meals ",
//   description: "meals loaded from mealDb api",
// };



export default function MealSearch() {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMeal(null);

    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      if (data.meals) {
        setMeal(data.meals[0]); // Show the first match
      } else {
        setError("No meal found.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search meal by name"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {meal && (
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full mt-2 rounded" />
          <p className="mt-2">{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}




// query হচ্ছে একটা স্টেট (state) যেটা ইনপুট ফিল্ডের ডাটা ধরে রাখে।
// এই ডাটা দিয়েই আমরা meal search API তে রিকোয়েস্ট পাঠাই।