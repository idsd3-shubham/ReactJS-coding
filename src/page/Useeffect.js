import React, { useEffect, useState } from 'react'
// useEffect is a react hook that perform side-effect in the componentS.
export const Useeffect = () => {
    const [count, setCount]=useState(0);
    const[data,setData]=useState(0);
    useEffect(()=>{
        console.log("Render page",count,"time");
    },[data])
  return (
    <>
        <p>total count number {count}</p>
        <p>total data  {data}</p>
        <button onClick={()=>setCount(count+1)}>count add</button>
        <button onClick={()=>setData(data+1)}>Data add</button>
    </>
  )
}
