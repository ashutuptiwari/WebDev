import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items }) => {
  return (
    <div className="todo-list">
      {items.map((item, index) => (
        <TodoItem key={index} text={item} />
      ))}
    </div>
  );
}

export default TodoList;
