import React from 'react'
import { ChildB } from './ChildB'

export const ChildA = ({name}) => {
  return (
   <>
   <p>ChildA page {name}</p>
    <ChildB name={name} />
   </>
  )
}
