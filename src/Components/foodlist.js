import React, { useState, useEffect } from "react";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [foodTypeFilter, setFoodTypeFilter] = useState("");
  const [deliveryTimeFilter, setDeliveryTimeFilter] = useState(0);

  useEffect(() => {
    const storedFoods = JSON.parse(localStorage.getItem("foods")) || [];
    setFoods(storedFoods);
    setFilteredFoods(storedFoods);
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = foods.filter((food) => {
      return (
        (foodTypeFilter === "" || food.foodType === foodTypeFilter) &&
        (deliveryTimeFilter === 0 || food.maxDeliveryTime <= deliveryTimeFilter)
      );
    });
    setFilteredFoods(filtered);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFoodTypeFilter("");
    setDeliveryTimeFilter(0);
    setFilteredFoods(foods);
  };

  return (
    <div>
      <form onSubmit={handleFilter}>
        <label>
          Food Type:
          <select
            value={foodTypeFilter}
            onChange={(e) => setFoodTypeFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <label>
          Delivery Time:
          <input
            type="number"
            value={deliveryTimeFilter}
            onChange={(e) => setDeliveryTimeFilter(e.target.value)}
          />
        </label>
        <button type="submit">Filter</button>
        <button onClick={handleReset}>Reset</button>
      </form>
      <ul>
        {filteredFoods.map((food, index) => (
          <li key={index}>
            {food.foodName} ({food.foodType}) - {food.maxDeliveryTime} minutes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
