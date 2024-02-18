// updater function = A function passed as an argument to setState() 
//                    usually ex. setYear(y => y + 1)
//                    Allow for safe updates based on the previous state 
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions


import React, {useState} from "react"


const Counter1 = () => {
  
  const[count, setCount] = useState(0)
 
  function Increment(){
    setCount(c => c + 1)
  }
  function Decrement(){
    setCount(c => c - 1)
  }
  function Reset(){
    setCount(c => c = 0)
  }


  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Counter1
