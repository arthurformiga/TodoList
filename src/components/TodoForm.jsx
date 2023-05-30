import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue || !selectedValue) return;
    addTodo(inputValue, selectedValue);
    setInputValue("");
    setSelectedValue("");
  };

  return (
    <div>
      <main className='container'>
        <h1>Criar tarefa</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            value={inputValue}
            type='text'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className='selected-container'>
            <select
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option value=''>Selecione uma categoria</option>
              <option value='Trabalho'>Trabalho</option>
              <option value='Pessoal'>Pessoal</option>
              <option value='Lazer'>Lazer</option>
            </select>
          </div>
          <div>
            <button type='submit'>Adicionar</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default TodoForm;
