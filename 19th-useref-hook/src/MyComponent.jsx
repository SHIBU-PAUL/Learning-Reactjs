import React, {useState, useEffect, useRef} from 'react'

const MyComponent = () => {

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED")
  });

  function handleClick(){
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = "yellow"
  };


  return (
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>

      <input ref={inputRef}/>
    </div>
  )
}

export default MyComponent
