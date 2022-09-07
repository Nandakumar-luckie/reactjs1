import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h4>Custom Hook : useCounter</h4>
        <Counter name="1st" initValue={0} />
        <Counter name="2st" initValue={10} />
      </div>
    </div>
  );
}

export default App;
