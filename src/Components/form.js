import React, { useState } from "react";

const FoodForm = () => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      foodName,
      foodType,
      maxDeliveryTime,
    };
    console.log(newFood); // You can remove this line, this is just for testing purposes.
    // Add your code to store the new food object in local storage or make an API call here.
    setFoodName("");
    setFoodType("");
    setMaxDeliveryTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Food Name:
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Food Type:
        <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
          <option value="">Select a food type</option>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </label>
      <br />
      <label>
        Max Delivery Time (minutes):
        <input
          type="number"
          value={maxDeliveryTime}
          onChange={(e) => setMaxDeliveryTime(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FoodForm;
