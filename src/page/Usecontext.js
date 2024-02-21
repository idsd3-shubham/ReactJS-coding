import React, { createContext } from 'react'
import { ChildC } from './ChildC';
// useContext is a react hook it used to direct access the context value without wrapping consumer wrapper.
const data=createContext();
export const Usecontext = () => {
    const name="shubham maurya";
  return (
    <data.Provider value={name}>
        <p>This page is create context</p>
        <ChildC />
    </data.Provider>
  )
}

export {data}