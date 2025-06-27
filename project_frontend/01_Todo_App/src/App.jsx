import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    console.log(`new item add : ${itemName} and date is :  ${itemDate} `);
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemsName)=>{ 
    const newTodoItems = todoItems.filter((item)=>item.name!==todoItemsName)
    setTodoItems(newTodoItems )

  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeteleClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
