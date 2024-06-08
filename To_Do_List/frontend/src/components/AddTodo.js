import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const[status,setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
       const newTodo = {
        title,
        description,
        status,
        due_date: dueDate,
      };
      addTodo(newTodo);
              setTitle('');
              setDescription('');
              setStatus('');
              setDueDate('');
  };

  return (
      <form onSubmit={handleSubmit}>
          <h2>Add Todo</h2>
          <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter todo title"
              required
          />
          <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='enter description'
              required
          />
          <select 
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
            <option value='pending'>pending</option>
            <option value="completed">completed</option>
          </select>

          <input 
            type='date'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            />
          <button type="submit">Add</button>
      </form>
  );
};

export default AddTodo;