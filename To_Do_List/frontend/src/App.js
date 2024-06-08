import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const[todos,setTodos] = useState([])

  useEffect(() => {
    fetchTodos();
  },[])

  const fetchTodos = () =>{
    axios.get('http://localhost:8000/get_or_create/')
    .then(response => {
      setTodos(response.data);
    })
    .catch(error => {
      console.error('there was an error fetching the todos',error);
    });
  }
  const addTodo = (newTodo) => {
    axios.post('http://localhost:8000/get_or_create/',newTodo)
    .then(response => {
      setTodos([...todos, response.data]);
    })
    .catch(error =>{
      console.error('there was an error creating the todo!',error);
    });
  };
  return (
    <div className="App">
       <TodoList todos={todos}/>
       <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
