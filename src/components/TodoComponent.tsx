import React from "react";
// Types
import { Todo } from "../types/Types";
// Icons
import { TrashIcon } from "../utilities/Icons";

type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  deleteOption?: boolean
};
const TodoComponent = ({ todo, setTodos, deleteOption }: Props) => {
  const handleChange = () => {
    setTodos((prev) => {
      return prev.map((item) => {
        return item.id === todo.id
          ? { ...item, compleded: !item.compleded }
          : item;
      });
    });
    // Local storage
    const storedTodosString = localStorage.getItem("todos");
    if (storedTodosString) {
      const storedTodos: Todo[] = JSON.parse(storedTodosString);
      let updatedList = storedTodos.map((item) => {
        if (item.id == todo.id) {
          return { ...item, compleded: !item.compleded };
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(updatedList));
    }
  };

  const deleteTodo = () => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== todo.id);
    });

    // Local storage
    const storedTodosString = localStorage.getItem("todos");
    if (storedTodosString) {
      const storedTodos: Todo[] = JSON.parse(storedTodosString);
      let updatedList = storedTodos.filter((item) => item.id !== todo.id);
      localStorage.setItem("todos", JSON.stringify(updatedList));
    }
  };

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <input
          checked={todo.compleded}
          onChange={handleChange}
          type="checkbox"
          className="checked:bg-blue-400 "
        />
        <label
          className={`font-medium text-lg ml-1 ${
            todo.compleded && "line-through"
          } `}
          htmlFor="checkbox"
        >
          {todo.text}
        </label>
      </div>
      { deleteOption && <button onClick={() => deleteTodo()}>
        <TrashIcon fill="#BDBDBD" />
      </button>}
    </div>
  );
};

export default TodoComponent;
