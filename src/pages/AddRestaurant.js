import React from "react";
import { useNavigate } from "react-router-dom";
import RestaurantForm from "../components/RestaurantForm";

const AddRestaurant = ({ addNewRestaurant }) => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addNewRestaurant(data); // Adds the new restaurant
    navigate("/"); // Redirects to the home page
  };

  return <RestaurantForm onSubmit={handleSubmit} />;
};

export default AddRestaurant;
