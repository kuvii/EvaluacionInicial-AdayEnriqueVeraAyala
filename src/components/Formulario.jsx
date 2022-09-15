import { useState } from "react";

const Formulario = () => {
    const initTask = {
        taskName: ''
    }
    const [form, setFormState] = useState(initTask);
    
    const handleInputChange = (e) => {
        e.preventDefault();
        setFormState({
          ...form,
          [e.target.name]: e.target.value
        });
      };

  return (
    <div>
      <div className='menu'>
        <p className="Header">TaskList</p>
        <input type='text' name="newTaskInput"  className='newTask-css' size={37} onChange={handleInputChange} />
        <button  className="buttonAdd" id="addButton">Add</button>
        
      </div>
    </div>
  );
};


export default Formulario;
