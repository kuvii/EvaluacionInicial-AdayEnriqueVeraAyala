import { useState } from "react";
import TaskList from "./TaskList";
const Formulario = (task, setTask) => {
    const initForm = {
        taskName: ''
    }
    const [form, setFormState] = useState(initForm);
    
    const handleInputChange = (e) => {
        e.preventDefault();
        setFormState({
          ...form,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setTask()
        setFormState(initForm)
      }
  return (
    <div>
        <form onSubmit={handleSubmit}></form>
      <div className='menu'>
        <p className="Header">TaskList</p>
        <input type='text' name="newTaskInput"  className='newTask-css' size={37} onChange={handleInputChange} />
        <button  className="buttonAdd" id="addButton">Add</button>
        
      </div>
      <TaskList task={task}/>
    </div>
  );
};


export default Formulario;
