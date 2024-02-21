import React from 'react'

// The state is a built-in-react object that is used to contain data or infomation about the component.
// A state can be modified based on user action or network changes.
// Everytime when the state of an object changes, React re-render the component to browser.
export const State = () => {
    var x=10;
    function updatevalue(){
        x=15;
    }
    console.log(x)
  return (
    <>
      <p>Total number {x}</p>  
      <button onClick={updatevalue} >update value</button>
    </>
  )
}
