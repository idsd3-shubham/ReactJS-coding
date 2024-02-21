import React from 'react'
import { ChildA } from './ChildA'

// Data pass from parentcomponent to childcomponent and childcomponent to subchild component that is called props dirling.
export const PropDriling = () => {
    const name ="shubham"
  return (
    <>
     <p>props driling page</p>
     <ChildA name={name} />
    </>
  )
}
