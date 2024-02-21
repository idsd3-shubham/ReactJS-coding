import React, { useState } from 'react'

export const Liftingstatechild = (props) => {
    const [name,setName]=useState();
    const handlesubmit=(e)=>{
        e.preventDefault();
        props.getData(name);
    }
  return (
    <>
    <form onSubmit={handlesubmit}>
        <input type="text" name='name' onChange={(e)=>setName(e.target.value)} /> 
        <button type='submit'>submit</button>
    </form>
    </>
  )
}
