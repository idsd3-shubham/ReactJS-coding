import React, { useContext } from 'react'

// export const ChildC = ({name}) => {
//   return (
//     <>
//     <p>Child C page name show  {name}</p>

//     </>
//   )
// }

import { data } from './Usecontext'
// export const ChildC = () => {
//   return (
//     <data.Consumer>
//         {(name)=><p>Child C page name show  {name}</p>}
//     </data.Consumer>
//   )
// }


export const ChildC = () => {
    const fname=useContext(data);
  return (
       <p>Child C page name show  {fname}</p>
  )
}
