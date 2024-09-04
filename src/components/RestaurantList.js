import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = ({ restaurants, onDelete }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <ul className="space-y-4">
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {restaurant.name}
              </h2>
              <p className="text-gray-600">{restaurant.description}</p>
              <p className="text-gray-500 text-sm">
                Location: {restaurant.location}
              </p>
            </div>
            <div className="flex space-x-2">
              <Link
                to={`/edit/${restaurant.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Modify
              </Link>
              <button
                onClick={() => onDelete(restaurant.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
