import React, {useState} from 'react';

const FunctionalCounter = () => {
    const [counter,setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter + 1)

    }

    const decrement = () => {
        setCounter(counter -1)
    }
  return (
    <div>
        <h3>Currnet Counters number is : {counter} </h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default FunctionalCounter