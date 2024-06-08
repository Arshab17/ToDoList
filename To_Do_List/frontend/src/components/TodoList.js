import React,{useEffect, useState} from 'react'
// import TodoItem from './TodoItem' ;
// import AddTodo from './AddTodo';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8000/get_or_create/')
          .then(response => {
              setTodos(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the todos!', error);
          });
  }, []);

  return (
      <div>
          <h1>Todo List</h1>
          <ul>
              {todos.map(todo => (
                  <li key={todo.id}>{todo.title}</li>
              ))}
          </ul>
      </div>
  );
};

export default TodoList;