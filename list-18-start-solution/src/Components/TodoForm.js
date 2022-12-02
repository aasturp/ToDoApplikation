import React from 'react'
import { useState } from 'react';
import Todo from './Todo';

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

  function handleTaskInputChange(e){
    setToDo({...todo, task: e.target.value})
  }

  return (
    <div>
      {/* TodoForm
      <input type='text' /> */}
      <form onSubmit={handleSubmit}> 
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
          onChange={handleTaskInputChange}
        />
        <button type='submit' className='btn btn__primary btn__lg'>
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoForm
