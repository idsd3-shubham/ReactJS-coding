import React from 'react'


// Destructuring provides a way to extract values into variables from data stored in objects and arrays
// Destructure array aur object me store data se variable me maan nikalne ka tarika pradan karta hai 
export const Destructur = (props) => {
    //for example  example:-  
    // const arr=[10,20,30,40];
    // const one=arr[0];
    // const three=arr[3];
    // console.log(one,three);


    // destructuring....

    // const [one,two,,three]=arr;
    // console.log(one,two,three);

    const {fname, lname}=props; 
    // console.log(fname,lname)
  return (
    <>
    <div>destructur</div>
    <p>{fname} - {lname}</p>

    </>
  )
}
