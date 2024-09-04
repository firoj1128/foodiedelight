import React, { useState } from "react";

const RestaurantForm = ({ initialData = {}, onSubmit }) => {
  const [name, setName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [location, setLocation] = useState(initialData.location || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, location });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Add Restaurant
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter restaurant name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter restaurant description"
          rows="4"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter restaurant location"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default RestaurantForm;
