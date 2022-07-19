import React, { useEffect, useState } from "react";
import "./App.css";
// Components
import Tabs from "./components/tabs/Tabs";
import Tab from "./components/tab/Tab";
import AddTodo from "./components/AddTodo";
import TodoComponent from "./components/TodoComponent";
// Types
import { Todo } from "./types/Types";
import DeleteButton from "./components/DeleteButton";
import SelectAllButton from "./components/SelectAllButton";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    const active = todos.filter((todo) => todo.compleded === false);
    setActiveTodos(active);
    const completed = todos.filter((todo) => todo.compleded === true);
    setCompletedTodos(completed);
  }, [todos]);

  const deleteAllCompletedTodo = () => {
    const newTodos = todos.filter((todo) => todo.compleded === false);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const selectAllTodos = () => {
    const newTodos = todos.map((todo) => {
      return { ...todo, compleded: true };
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="flex flex-col items-center">
      {/* title */}
      <h1 className="font-serif text-primary text-4xl font-bold my-4">#todo</h1>
      <Tabs>
        <Tab title="All">
          <AddTodo setTodos={setTodos} />
          {todos.map((todo) => {
            return <TodoComponent todo={todo} setTodos={setTodos} />;
          })}
          {todos.length === 0 && <p className="mt-1">add todo</p> }
        </Tab>
        <Tab title="Active">
          <AddTodo setTodos={setTodos} />
          {activeTodos.map((todo) => {
            return <TodoComponent todo={todo} setTodos={setTodos} />;
          })}
          {activeTodos.length > 0 ? (
            <SelectAllButton selectAllTodos={selectAllTodos} />
          ) : (
            <p>add todo</p>
          )}
        </Tab>
        <Tab title="Completed ">
          {completedTodos.map((todo) => {
            return (
              <TodoComponent deleteOption todo={todo} setTodos={setTodos} />
            );
          })}
          {completedTodos.length > 0 ? (
            <DeleteButton deleteAllCompletedTodo={deleteAllCompletedTodo} />
          ) : (
            <p>add todo</p>
          )}
        </Tab>
      </Tabs>

      <p className="absolute bottom-10 text-[#A9A9A9] text-sm font-medium ">
        created by <span className="font-bold underline">téo goulois</span> -
        devChallenges.io
      </p>
    </div>
  );
}

export default App;
