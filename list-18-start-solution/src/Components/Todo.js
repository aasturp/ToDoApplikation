import React from "react";

export default function Todo({ todo, toDoComplete, removeTodo }) {
  function handleCheckBox() {
    toDoComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li
          className="todo stack-small"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="c-cb" style={{ marginTop: "10px" }}>
            <input id="todo-0" type="checkbox" onClick={handleCheckBox} />

            <label className="todo-label" htmlFor="todo-0"></label>

            {todo.task}
          </div>
        </li>

        <button
          type="button"
          className="btn btn__danger"
          onClick={handleRemoveClick}
        >
          Delete
        </button>
      </ul>
    </div>
  );
}
