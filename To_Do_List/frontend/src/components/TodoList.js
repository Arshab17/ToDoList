import React,{useState} from 'react'
const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }


    function deleteTask(index){

    }

  return (
    <div className="to-do-list">
        <h1> To-Do-List</h1>

        <div>
            <input type='text' placeholder='enter a task' value={newTask} onChange={handleInputChange} />
            <button className='add-button' onClick={addTask}>add</button>
        </div>

    </div>
  )
}

export default TodoList