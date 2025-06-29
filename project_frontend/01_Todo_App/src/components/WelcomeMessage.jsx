import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return todoItems.length === 0 && <h1>Enjoy your day</h1>;
};

export default WelcomeMessage;
