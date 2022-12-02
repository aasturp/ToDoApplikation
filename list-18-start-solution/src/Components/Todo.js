import React from 'react'



export default function Todo({ todo }) {

  function handleCheckBox() {
    
  }

  return (
    <div>
      <ul>
        <li className='todo stack-small'>
          <div className='c-cb'>
            <input id='todo-0' type='checkbox' checked={todo.completed} onClick={handleCheckBox}/>
            <label className='todo-label' htmlFor='todo-0'></label>
          </div>
          {/*  <div className='btn-group'>
            <button type='button' className='btn'>
              Edit <span className='visually-hidden'>Eat</span>
            </button>
            <button type='button' className='btn btn__danger'>
              Delete <span className='visually-hidden'>Eat</span>
            </button>
          </div> */}
          {todo.task}
        </li>
      </ul>
    </div>
  )
}
