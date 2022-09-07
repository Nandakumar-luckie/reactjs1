
import { useState } from 'react';
import './App.css';
import InputHandler from './InputHandler';
import Memorization from './Memorization';
import UseEffectTest from './UseEffectTest';
import Welcome from './Welcome';

function App() {
  let [toggleEffect, setToggleEffect] = useState(false);
  const toggleEffectHandler = () => {
    setToggleEffect(!toggleEffect);
  };
  return (
    <div className="App">
      <div className="App-header">
        <Welcome />
        <button onClick={toggleEffectHandler}>ToggleEffect</button>
        {toggleEffect && <UseEffectTest />}
        <InputHandler />
        <Memorization />
      </div>
    </div>
  );
}

export default App;
