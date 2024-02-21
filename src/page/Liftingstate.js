import React from 'react'
import { Liftingstatechild } from './Liftingstatechild'
// Lifting state is used data pass child to parent componet that is call lifting state.
export const Liftingstate = () => {
    function getData(data){
        console.log(data);
    }
  return (
    <>

    <Liftingstatechild getData={getData} />
    </>
  )
}
