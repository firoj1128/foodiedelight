import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantForm from "../components/RestaurantForm";

const EditRestaurant = ({ restaurants, updateRestaurant }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const restaurantToEdit = restaurants.find((r) => r.id === parseInt(id));
    if (restaurantToEdit) {
      setRestaurant(restaurantToEdit);
    } else {
      navigate("/");
    }
  }, [id, restaurants, navigate]);

  const handleSubmit = (data) => {
    updateRestaurant(parseInt(id), data);
    navigate("/");
  };

  return restaurant ? (
    <RestaurantForm initialData={restaurant} onSubmit={handleSubmit} />
  ) : (
    <p>Loading...</p>
  );
};

export default EditRestaurant;
