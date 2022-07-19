import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../types/Types";
type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const AddTodo = ({ setTodos }: Props) => {
  const [input, setInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.length <= 0) return;
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...JSON.parse(storedTodos),
          { id: uuidv4(), text: input, compleded: false },
        ])
      );
    } else {
      localStorage.setItem(
        "todos",
        JSON.stringify([{ id: uuidv4(), text: input, compleded: false }])
      );
    }
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text: input, compleded: false },
    ]);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex">
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="add details"
        className="w-full outline-none border border-light-gray rounded-xl p-2"
        type="text"
        value={input}
      />
      <button className="bg-blue rounded-xl px-6 py-2 ml-4" type="submit">
        <p className="text-white">Add</p>
      </button>
    </form>
  );
};

export default AddTodo;
