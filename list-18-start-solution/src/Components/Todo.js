import React from 'react'

export default function Todo({ todo, toDoComplete, removeTodo }) {
  function handleCheckBox() {
    toDoComplete(todo.id)
  }

  function handleRemoveClick() {
    removeTodo(todo.id)
  }

  return (
    <div>
      <ul>
        <li className='todo stack-small'>
          <div className='c-cb'>
            <input id='todo-0' type='checkbox' onClick={handleCheckBox} />
            <label className='todo-label' htmlFor='todo-0'></label>
          </div>

          {todo.task}
        </li>
        <button
          type='button'
          className='btn btn__danger'
          onClick={handleRemoveClick}
        >
          Delete
        </button>
      </ul>
    </div>
  )
}
