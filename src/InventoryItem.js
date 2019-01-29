import React from 'react'

export default (props) => {
    console.log('log');
    
  return (
      <div key={props.id}>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
        <p>{props.description}</p>
      </div>
  )
}
