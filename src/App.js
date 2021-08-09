import Counter from './components/Counter/Counter';
import CountContextWrapper from './context/CountContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <CountContextWrapper>
        <Counter />
      </CountContextWrapper>
      
    </div>
  );
}

export default App;
