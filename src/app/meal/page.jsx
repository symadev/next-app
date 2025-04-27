"use client";

import { useEffect, useState } from "react";

export default function MealSearch() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load all meals on initial render
  useEffect(() => {
    const fetchAllMeals = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        setMeals(data.meals || []);
      } catch (err) {
        setError("Failed to load meals.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllMeals();
  }, []);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals); // show filtered meals
      } else {
        setMeals([]);
        setError("No meal found.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="mb-6">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover mt-2 rounded" />
            <p className="mt-2 line-clamp-3">{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
