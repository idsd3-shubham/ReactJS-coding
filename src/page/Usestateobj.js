import React, { useState } from 'react'
// useState with object: allow to manage state contain multiple variable
export const Usestateobj = () => {
    const [data,setData]=useState({firstName:'shubham',lastName:"maurya"})

  return (
    <div>
        <p>my firstName is {data.firstName} and my lastName is {data.lastName}</p>
        <button onClick={()=>setData({...data,firstName:'shivam'})}>fname change</button>
        <button onClick={()=>setData({...data,lastName:'singh'})}>lname change</button>
    </div>
  )
}
