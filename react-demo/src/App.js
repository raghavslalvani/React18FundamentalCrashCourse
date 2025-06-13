import './App.css';
import {Greet} from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name = 'Bruce' heroName='Batman'/>
      <Greet name = 'Clark' heroName='SuperMan'>
        <button>Action</button>
      </Greet>
      <Greet name = 'Diana' heroName='WonderWoman'>
        <p>This is children props</p>
      </Greet>
    </div>
  );
}

export default App;
