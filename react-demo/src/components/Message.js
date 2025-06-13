import { useState } from "react";

export const Message = (props) => {
    const [message, setMessage] = useState('Welcome visitor'); 
    // useState is a Hook that lets you add React state to function components
    //Array destructuring to get the state variable and the function to update it
    return(
        <div>
        <h1>{message}</h1>
        <button onClick={()=> setMessage('Thank you for subscribing')}>Subscribe</button>
        </div>
    )
}