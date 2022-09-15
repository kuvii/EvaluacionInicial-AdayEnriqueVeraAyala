import Formulario from "./components/Formulario.jsx";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState({
    taskName: ''
  })
  return (                        
  <>
    <div>
        <Formulario task={task} setTask={setTask} />
    </div>
  </>
  );
};

export default App;
