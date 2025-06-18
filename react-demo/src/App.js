import './App.css';
import { Postlist } from './components/PostList';
// import { Form } from './components/Form';
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import { Inline } from './components/Inline';
// import { Stylesheet } from './components/Stylesheet';
// import { NameList } from './components/NameList';
// import { UserGreeting } from './components/UserGreeting';
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
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet></Stylesheet> */}
      {/* <Inline></Inline>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form></Form> */}
        <Postlist></Postlist>
    </div>
  );
}

export default App;
