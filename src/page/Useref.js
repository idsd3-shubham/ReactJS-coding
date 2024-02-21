import React, {  useRef, useState } from 'react'

//useRef is a react hook it is use to dom mainuplate. and useRef hook don't cause re-render when change value.
export const Useref = () => {
    const [name, setName]=useState();
    const refElement=useRef();
  return (
    <>
        <p>{name}</p>
        <input ref={refElement} type='text'  name="name" value={name} onChange={(e)=>{setName(e.target.value);refElement.current.focus()}} />
        <button onClick={()=>{setName("")}}>Reset</button>
        <button onClick={()=>{refElement.current.style.color="blue"}}>focus</button>
    </>
  )
}
