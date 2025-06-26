import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodIntput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, settextToShow] = useState();
  let [foodItems, setFoodItem] = useState([]);
  const onkeydown = (event) => {
    if(event.key === "Enter")
    {
      let newFoodItem = event.target.value
      event.target.value = ''
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems)

    }
    console.log(event.target.value);
    settextToShow(event.target.value);
  };
  
  return (
    <Container>
      <h1 className="food-heading">Healty Food</h1>
      <FoodIntput handlekeyDown={onkeydown}></FoodIntput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
