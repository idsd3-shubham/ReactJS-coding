import React, { useState } from 'react'

// useState is a react hook that state variable use only inner component which return array : two type return currentstate and function and pass optional initial value .
export const Usestate = () => {
    const [currentValue,setCurrentValueFun]=useState("initial value");
  return (
    <>
        <p>This is useSate value fomating {currentValue}</p>
        <button onClick={()=>setCurrentValueFun("updateValue")}>update Value</button>
    </>
  )
}
