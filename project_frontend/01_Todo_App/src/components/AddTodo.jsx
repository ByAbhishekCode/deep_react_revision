import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef()
  const dueDateElement = useRef()

  const handleAddButtonChange = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value
    const dueDate = dueDateElement.current.value
    todoNameElement.current.value =""
    dueDateElement.current.value =""

    console.log(`${todoName} due on: ${dueDate}`)
    onNewItem(todoName, dueDate);

  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonChange}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date"  />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
