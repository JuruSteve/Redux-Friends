import React from 'react'
import './styles.css'

const Friend = ({ friend }) => {
  return (
    <div className='friend'>
      <ul>
        <li>{friend.name}</li>
      </ul>
      <p className='age'>{friend.age}</p>
    </div>
  )
}

export default Friend
