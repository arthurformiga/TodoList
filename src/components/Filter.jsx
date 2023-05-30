import React from "react";

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="options-select">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value='All'>Todas</option>
        <option value='Completed'>Completas</option>
        <option value='Uncompleted'>Incompletas</option>
      </select>
      <div className="buttons">
        <p>Ordem alfabética:</p>
        <button onClick={() => setSort("Asc")}>Asc</button>
        <button onClick={() => setSort("Desc")}>Desc</button>
      </div>
    </div>
  );
};

export default Filter;
