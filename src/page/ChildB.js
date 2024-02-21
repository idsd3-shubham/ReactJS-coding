import React from 'react'
import { ChildC } from './ChildC'

export const ChildB = ({name}) => {
  return (
    <>
    <p>Child B page {name}</p>
    <ChildC name={name} />
    </>
  )
}
