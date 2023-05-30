import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "",
      category: "",
      completed: false,
    },
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodo = [
      ...todo,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        completed: false,
      },
    ];
    setTodo(newTodo);
  };

  const removeTodo = (id) => {
    const newTodo = todo.filter((todo) => (todo.id !== id ? id : null));
    setTodo(newTodo);
  };

  const completeTodo = (id) => {
    const newTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(newTodo);
  };

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Filter setSort={setSort} filter={filter} setFilter={setFilter} />
      <TodoForm addTodo={addTodo} />
      <Todo
        sort={sort}
        filter={filter}
        search={search}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        key={todo.id}
        todo={todo}
      />
    </>
  );
};

export default App;
