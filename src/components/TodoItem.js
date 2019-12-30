import React from 'react';

function TodoItem({ todo, onRemove, onToggle }) {
  const removeStyle = {
    marginLeft: 8,
    color: 'red'
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };
  
  const handleToggle = () => {
      onToggle(todo.id, todo.done);
  }

  return (
    <li>
      <span onClick={handleToggle} style={{ textDecoration: todo.done ? 'line-through' : 'none'}} >
        {todo.id} | {todo.text} | {todo.created_at} | {todo.done}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;