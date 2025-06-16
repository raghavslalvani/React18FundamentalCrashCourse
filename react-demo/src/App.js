import './App.css';
import { UserGreeting } from './components/UserGreeting';
// import { ParentComponent } from './components/ParentComponent';
// import { ClickHandler } from './components/ClickHandler';
// import {Greet} from './components/Greet';
// import {Message} from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name = 'Bruce' heroName='Batman'/>
      <Greet name = 'Clark' heroName='SuperMan'>
        <button>Action</button>
      </Greet>
      <Greet name = 'Diana' heroName='WonderWoman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message></Message> */}
      {/* <ClickHandler></ClickHandler> */}
      {/* <ParentComponent></ParentComponent> */}
      <UserGreeting></UserGreeting>
    </div>
  );
}

export default App;
