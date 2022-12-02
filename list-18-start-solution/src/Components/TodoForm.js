import React from 'react'
import { useState } from 'react';

const TodoForm = (addTask) => {
  const [todo, setToDo] = useState({
    id:"",
    task:"",
    completed:false
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()){
      addTask({...todo, id:Math.random()*1000})
      setToDo({...todo, task:""})
    }
  }

  return (
    <div>
      {/* TodoForm
      <input type='text' /> */}
      <form>
        <h2 className='label-wrapper'>
          <label htmlFor='new-todo-input' className='label__lg'>
            What needs to be done?
          </label>
        </h2>
        <input
          type='text'
          id='new-todo-input'
          className='input input__lg'
          name='text'
          autoComplete='off'
        />
        <button type='submit' className='btn btn__primary btn__lg'>
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoForm
