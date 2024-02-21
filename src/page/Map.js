import React from 'react'
// map is a function that used to iterate array value and return a new array
export const Map = () => {
    const data=["mango" ,"banana" ,"Apple"];
    const result=data.map((item,idx)=><p key={idx}>{item}</p>)
  return (
    <div>
        {/* {
            data.map((item,idx)=>(
                <p key={idx}>{item}</p>
            ))
        } */}
        {result}
    </div>
  )
}
