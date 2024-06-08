import React, { useState } from 'react';
import axios from 'axios';

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...todo });

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/update_or_delete/${todo.id}/`);
      fetchTodos();
    } catch (error) {
      console.error("There was an error deleting the todo!", error);
    }
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8000/update_or_delete/${todo.id}/`, formData);
      setIsEditing(false);
      fetchTodos();
    } catch (error) {
      console.error("There was an error updating the todo!", error);
    }
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;