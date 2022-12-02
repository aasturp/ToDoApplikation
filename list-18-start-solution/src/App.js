import './App.css'
import TodoForm from './Components/TodoForm'
import { useState } from 'react'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setToDos] = useState([]) //manages the state

  function addTask(todo) {
    setToDos(prevState => [...prevState, todo])
  }

  function toDoComplete(id) {
    setToDos(
      todos.map((todo)=> {
        if(todo.id === id) {
          return {
            ...todo, completed:!todo.completed 
          }
        }
        return todo;
      })
    )
  }

  return (
    <div className='todoapp stack-large'>
      <h1>ToDo</h1>
      <TodoForm addTask={addTask} />
      {/* <div className='filters btn-group stack-exception'>
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
      </div> */}
      <h2 id='list-heading'>Task list</h2>
      <TodoList todos={todos}toDoComplete={toDoComplete} />

      {/*     <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul> */}
    </div>
  )
}
export default App
