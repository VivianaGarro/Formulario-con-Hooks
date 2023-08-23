import React, { useState } from "react";
import Forms from './componentes/Forms';
import Results from './componentes/Results';


function App() {
const [ state, setState ] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
});
  return (
    <div className="App">
      <Forms inputs={state} setInputs={setState}/>
      <Results data={state} />
    
    </div>
  );
}

export default App;
