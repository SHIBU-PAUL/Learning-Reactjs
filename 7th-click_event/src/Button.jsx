import React from 'react'

const Button = () => {

   const handleClick = (event) => event.target.textContent = "OUCH!"

  return (
    <div>
    <button onDoubleClick={(event) => handleClick(event) }>Click me</button>
    </div>
  )
}

export default Button
