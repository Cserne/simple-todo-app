import React from 'react'

const TodoList = ({ todos, completed, deleteTodo }) => {

  return (
    <div className='todosContainer'>
        {
          todos.map((todo, index) => (
            <div key={index} className='todo'>
              <div className='todoText' style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}}>
                {todo.text}
              </div>
              <div>
                <button onClick={() => completed(index)}>Completed</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default TodoList