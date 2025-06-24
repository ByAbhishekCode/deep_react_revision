import AppName from "./componets/appName";
import AddTodo from "./componets/addTodo";
import TodoItem from "./componets/todoItem";
import TodoItem2 from "./componets/todoItem2";
import './App.css'
function App() {
  return (
    <center>
      <AppName></AppName>
      <AddTodo />
      <TodoItem/>
      <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;
