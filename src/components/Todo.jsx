import React from "react";

const Todo = ({ todo, removeTodo, completeTodo, search, filter, sort }) => {
  return (
    <div>
      <aside className='list'>
        <h1>TodoList</h1>

        <>
          {todo
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "Completed"
                ? todo.completed
                : !todo.completed
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <div
                key={todo.id}
                className='todo-list'
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                  color: todo.completed ? "#9f9f9c9c" : "#fff",
                }}
              >
                {todo.text && ( // Verifica se há texto na tarefa antes de renderizar o conteúdo
                  <>
                    <p>{todo.text}</p>
                    {todo.category && <p>({todo.category})</p>}
                    {/* Verifica se há categoria antes de renderizar os parênteses */}
                    <div>
                      <button onClick={() => completeTodo(todo.id)}>
                        Completar
                      </button>
                      <button onClick={() => removeTodo(todo.id)}>X</button>
                    </div>
                  </>
                )}
              </div>
            ))}
        </>
      </aside>
    </div>
  );
};

export default Todo;
