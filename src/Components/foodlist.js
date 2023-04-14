import React, { useState } from "react";

function FoodList() {
  const [filterType, setFilterType] = useState("");
  const [filterDeliveryTime, setFilterDeliveryTime] = useState("");

  function handleTypeChange(event) {
    setFilterType(event.target.value);
  }

  function handleTimeChange(event) {
    setFilterDeliveryTime(event.target.value);
  }

  const foodList = JSON.parse(localStorage.getItem("foodList")) || [];

  const filteredFoods = foodList.filter((food) => {
    if (filterType && food.foodType !== filterType) {
      return false;
    }
    if (filterDeliveryTime && food.maxDeliveryTime > filterDeliveryTime) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h2>Food List</h2>
      <form>
        <label>
          Food Type:
          <select value={filterType} onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <label>
          Max Delivery Time (minutes):
          <input
            type="number"
            value={filterDeliveryTime}
            onChange={handleTimeChange}
          />
        </label>
      </form>
      <div style={{ display: "flex" }}>
        {filteredFoods.map((food, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #000",
              margin: "10px",
              padding: "0 10px",
            }}
          >
            <h1>Food Nams: {food.food}</h1>
            <p>Food type: {food.foodType}</p>
            <p>Time Duration: {food.maxDeliveryTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodList;
