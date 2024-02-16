import React from 'react'

const ProfilePicture = () => {

  const imageUrl = './src/assets/beast.jpeg';

  const handleClick = (event) => event.target.style.display = "none";

  return (
    <div>
      <img onClick={(event) => handleClick(event)} src={imageUrl}/>
    </div>
  )
}

export default ProfilePicture
