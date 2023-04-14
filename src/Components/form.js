import React, { useState } from "react";
import "./form.css";
function FoodForm() {
  const [food, setFood] = useState("");
  const [foodType, setFoodType] = useState("Delicious Food");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const foodData = { food, foodType, maxDeliveryTime };
    const foodList = JSON.parse(localStorage.getItem("foodList")) || [];
    foodList.push(foodData);
    localStorage.setItem("foodList", JSON.stringify(foodList));
    console.log("Food data saved to local storage:", foodData);

    console.log({ food, foodType, maxDeliveryTime });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Food Name:
          <input
            type="text"
            value={food}
            onChange={(event) => setFood(event.target.value)}
          />
        </label>
        <br />
        <label>
          Food Type:
          <select
            value={foodType}
            onChange={(event) => setFoodType(event.target.value)}
          >
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
            onChange={(event) => setMaxDeliveryTime(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </>
  );
}

export default FoodForm;
