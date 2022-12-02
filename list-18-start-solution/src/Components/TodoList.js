import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, removeTodo, toDoComplete }) => {
  return (
    <div>
      <h2>Task list</h2>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toDoComplete={toDoComplete}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
