import React, { useState } from "react";
import RestaurantList from "../components/RestaurantList";

const Home = ({ restaurants, setRestaurants }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto p-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by name..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <RestaurantList
        restaurants={filteredRestaurants}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
