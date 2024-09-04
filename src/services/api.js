export const addRestaurant = async (data) => {
  const newRestaurant = { ...data, id: dummyRestaurants.length + 1 };
  dummyRestaurants.push(newRestaurant);
  return newRestaurant;
};
