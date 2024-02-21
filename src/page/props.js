import React from 'react'

// props is a stands for properties 
// props are used transfer data from one component to another component
// props are read only
// props are just like a function in javascipts 
// props return object.


export const Props = (props) => {
    console.log(props);
  return (
    <>
    <h1>My name is {props.name}</h1>
    </>
  )
}
