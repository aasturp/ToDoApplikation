import './App.css'
import { List } from './List'
import { MapLoopList } from './MapLoopList'
import TodoForm from './Components/TodoForm'
import { useState } from 'react'
import Todo from './Components/Todo'

function App(props) {
  const [todos, setToDos] = useState([]); //manages the state 

  function addTask(todo) {
    setToDos([todo,...todos]);
  }

  return (
    
    <div className='todoapp stack-large'>
      <h1>ToDo</h1>
      <TodoForm />
      <div className='filters btn-group stack-exception'>
        <button type='button' className='btn toggle-btn' aria-pressed='true'>
          <span className='visually-hidden'>Show </span>
          <span>all</span>
          <span className='visually-hidden'> tasks</span>
        </button>
        <button type='button' className='btn toggle-btn' aria-pressed='false'>
          <span className='visually-hidden'>Show </span>
          <span>Active</span>
          <span className='visually-hidden'> tasks</span>
        </button>
        <button type='button' className='btn toggle-btn' aria-pressed='false'>
          <span className='visually-hidden'>Show </span>
          <span>Completed</span>
          <span className='visually-hidden'> tasks</span>
        </button>
      </div>
      <h2 id='list-heading'>3 tasks remaining</h2>
      <Todo />
       {/* <ul
        role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        <li className='todo stack-small'>
          <div className='c-cb'>
            <input id='todo-1' type='checkbox' />
            <label className='todo-label' htmlFor='todo-1'>
              Sleep
            </label>
          </div>
          <div className='btn-group'>
            <button type='button' className='btn'>
              Edit <span className='visually-hidden'>Sleep</span>
            </button>
            <button type='button' className='btn btn__danger'>
              Delete <span className='visually-hidden'>Sleep</span>
            </button>
          </div>
        </li>
        <li className='todo stack-small'>
          <div className='c-cb'>
            <input id='todo-2' type='checkbox' />
            <label className='todo-label' htmlFor='todo-2'>
              Repeat
            </label>
          </div>
          <div className='btn-group'>
            <button type='button' className='btn'>
              Edit <span className='visually-hidden'>Repeat</span>
            </button>
            <button type='button' className='btn btn__danger'>
              Delete <span className='visually-hidden'>Repeat</span>
            </button>
          </div>
        </li>
      </ul>  */}
    </div>
  )
}
export default App
