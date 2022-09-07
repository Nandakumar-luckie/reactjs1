import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import InputText from './InputText';
import PortalHandler from './PortalHandler';
import ListHandler from './ListHandler';

function App() {
  let [showPortal, setShowPortal] = useState(false);
  console.log('app', showPortal);
  //debugger;
  return (
    <div className="App">
      <div className="App-header">
        <Counter />
        <InputText />
        <button onClick={() => {setShowPortal(!showPortal)}}>Toggle Portal</button>
        {/* {showPortal && <PortalHandler />} */}
        <ListHandler />
      </div>
    </div>
  );
}

export default App;
