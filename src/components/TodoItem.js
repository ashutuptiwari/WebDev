import React, { useState } from 'react';
import './TodoItem.css'
const TodoItem = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [priority, setPriority] = useState('LOW');

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className={`todo-item ${isChecked ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        id="checkbox"
      />
      <span id="text" >{text}</span>
      <select value={priority} onChange={handlePriorityChange} id="select">
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="URGENT">Urgent</option>
      </select>
    </div>
  );
}

export default TodoItem;
