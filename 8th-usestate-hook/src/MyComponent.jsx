import React, {useState} from 'react';

const MyComponent = () => {

  const [name, setName] = useState("Guast")
  const [age, setAge] = useState(0)
  const [isEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName("Ram");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const emplyedStatus = () => {
    setIsEmployed(!isEmployed)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      
      <p>Is employed: {isEmployed ? "Yes": "No"}</p>
      <button onClick={emplyedStatus}>Increment Age</button>
    </div>
  )
}

export default MyComponent
