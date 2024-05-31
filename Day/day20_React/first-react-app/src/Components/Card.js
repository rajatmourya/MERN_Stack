import React from 'react';
import Avatar from './Avatar';

function Card({name, email, ...props}) {
  
  const CardStyle = {
    padding: '10px',
    border: '2px solid black',
    margin: '20px',
    boxShadow: '2px 2px 2px gray'
  }

  return (
    <div style={CardStyle}>
      <Avatar image = {props.image} name = {name} />
      <h1>{name}</h1>
      <p>{email} </p>
    </div>
  )
}

export default Card;