import React, { useCallback, useState } from 'react'
import  Usecall  from './Usecall';
// There is a term in react concept referential validity  jab bhi hamara page re-render hota hai then function re-create to child componet ko lagega ki function me kuchh action perform hua hoga
// Usecallback is a react hook. that is used to perfomance inhance. there are two type argment function and dependency if want child component re-render then dependency pass. and with child componet export memo function

export const Usecallback = () => {
    const [count,setCount]=useState(0);
    const Learnig=useCallback(()=>{

    },[])
  return (
    <>
        <p>{count}</p>
        <Usecall  data={Learnig}/>
        <button onClick={()=>setCount(count+1)}>Add</button>
    </>
  )
}
