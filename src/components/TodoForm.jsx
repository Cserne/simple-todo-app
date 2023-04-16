import React, { useState } from 'react';
import TodoList from './TodoList';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const addTodo = (text) => {
    const newTodoArr = [...todos, { text, isCompleted: false }];
    setTodos(newTodoArr.filter(todo => todo.text.length > 0))
  };

  const completed = (index) => {
    const newTodoArr = [...todos];
    newTodoArr[index].isCompleted = true;
    setTodos(newTodoArr);
  };

  const deleteTodo = (index) => {
    const newTodoArr = [...todos];
    newTodoArr.splice(index, 1);
    setTodos(newTodoArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='input' value={value} onChange={e => setValue(e.target.value)}></input>
        <IconButton type='submit'>
          <AddCircleOutlineSharpIcon style={{ fontSize: '35px' }}/>
        </IconButton>
      </form>
      <TodoList todos={todos} completed={completed} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodoForm