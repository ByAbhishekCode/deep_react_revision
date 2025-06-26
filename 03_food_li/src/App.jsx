import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./componets/foodItem";
import ErrorMessage from "./componets/errorMessage";
function App() {
  let foodItem = ['daal','chawal','roti','sabji','sweetes','water','hotwater']
  // let foodItem = []
  
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage bhojan = {foodItem}></ErrorMessage>
      <FoodItem bhojan ={foodItem}></FoodItem>
    </>
  );
}

export default App;
