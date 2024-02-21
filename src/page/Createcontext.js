import React, { createContext } from 'react'
import { ChildC } from './ChildC';
// create context is a function that provied a way to pass data throught the component three without having pass props.
const data=createContext();
export const Createcontext = () => {
    const name="shubham maurya";
  return (
    <data.Provider value={name}>
        <p>This page is create context</p>
        <ChildC />
    </data.Provider>
  )
}

export {data}