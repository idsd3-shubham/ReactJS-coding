import React, { useMemo, useState } from 'react'
// useMemo is a react hook. It is used to performance inhance(achha karna). there are two type argument pass first argumentvpass function and second argument pass dependency array.
export const Usememo = () => {
    const [add,setAdd]=useState(0);
    const [subtract,setSubtract]=useState(100);
    // function multiplication(){
    //     console.log("runnig....");
    //     return add*10;
    // }

    const multiplication=useMemo(()=>{
        console.log("runnig..");
        return add*10;
    },[add])
  return (
    <>
        <p>{multiplication}</p>
        <p>{add}</p><button onClick={()=>setAdd(add+1)}>add</button>
        <p>{subtract}</p><button onClick={()=>setSubtract(subtract-1)}>subtract</button>
    </>
  )
}
