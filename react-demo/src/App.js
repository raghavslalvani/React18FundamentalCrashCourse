import "./App.css";
import NAMES from "./components/data.json";
import { useState,useTransition } from "react";
// import { PostForm } from './components/PostForm';
// import { Postlist } from './components/PostList';
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
  const [query, setQuery] = useState('');
  const [isPending,startTransition] = useTransition();
  const [inputValue, setInputValue] = useState('');
  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(event.target.value));
  }
  const filteredNames = NAMES.filter(item => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  })
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
      {/* <PostForm></PostForm> */}
      {/* <Postlist></Postlist> */}
      <input type="text" value={inputValue} onChange={changeHandler}></input>
      {isPending && <p>Updating list...</p>}
      {filteredNames.map((item) => (
        <p key={item.id}>{item.first_name} {item.last_name}</p>
      ))}
      </div>
  );
}

export default App;
