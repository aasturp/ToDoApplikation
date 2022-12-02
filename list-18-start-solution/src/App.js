import './App.css'
import TodoForm from './Components/TodoForm'
import { useState } from 'react'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setToDos] = useState([]) //manages the state

  function addTask(todo) {
    setToDos((prevState) => [...prevState, todo])
  }

  function toDoComplete(id) {
    setToDos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setToDos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='todoapp stack-large'>
      <h1>My ToDo</h1>
      <TodoForm addTask={addTask} />

      {/* <h2 id='list-heading'>Task list</h2> */}
      <TodoList
        todos={todos}
        toDoComplete={toDoComplete}
        removeTodo={removeTodo}
      />
    </div>
  )
}
export default App
