import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddRestaurant from "./pages/AddRestaurant";
import EditRestaurant from "./pages/EditRestaurant";

const App = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Pizza Place",
      description: "Best pizza in town!",
      location: "PUNE",
    },
    {
      id: 2,
      name: "Sushi World",
      description: "Fresh sushi every day!",
      location: "PUNE",
    },
    {
      id: 3,
      name: "Burger Haven",
      description: "Juicy burgers and fries",
      location: "PUNE",
    },
  ]);

  const addNewRestaurant = (data) => {
    const newRestaurant = { ...data, id: restaurants.length + 1 };
    setRestaurants([...restaurants, newRestaurant]);
  };

  const updateRestaurant = (id, updatedData) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, ...updatedData } : restaurant
      )
    );
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home restaurants={restaurants} setRestaurants={setRestaurants} />
            }
          />
          <Route
            path="/add"
            element={<AddRestaurant addNewRestaurant={addNewRestaurant} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditRestaurant
                restaurants={restaurants}
                updateRestaurant={updateRestaurant}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
