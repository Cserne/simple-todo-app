import React from 'react';
import IconButton from '@mui/material/IconButton';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import Delete from '@mui/icons-material/Delete';

const TodoList = ({ todos, completed, deleteTodo }) => {

  return (
    todos.length === 0 ? 
      <h2>You don't have any todos.</h2>
    :
    <div className='todosContainer'>
        {
          todos.map((todo, index) => (
            <div key={index} className='todo'>
              <div className='todoText' style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}}>
                {todo.text}
              </div>
              <div className='todoBtns'>
                <IconButton style={{ color: todo.isCompleted ? 'green' : ''}} onClick={() => completed(index)}>
                  <CheckBoxRoundedIcon style={{ fontSize: '30px' }}/>
                </IconButton>
                <IconButton color='error' onClick={() => deleteTodo(index)}>
                  <Delete style={{ fontSize: '30px' }}/>
                </IconButton>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default TodoList