// what is Redux

//** */ Redux is a predictable state container for javascript apps.

// state={
//     name:'shubham',
//     password:'123'
// }

// predictable means track of state 

// -->Redux is a library for javascript application
// --> you can use Redux together with react or with any other view library (Angular, vue)
// -->Redux is a state container 



// core concept of Redux:


//** */ store: Holds state of your application

//** */ Action : Decribe the changes in the state application.

// action are javascript object that contain information. action have a type property and it should be defined string contraint variable

// Reducer: Basically is a function the state transfer depending on the action.

//** */ Reducer are the  function that accepts state and action as parameter and return the next state of the application


// What is redux store:
//  it is reponbility for holding application state 


// useSelector is a hook react-redux library provides to get hold of any state that maintained in the redux store.
//it is a function accept the redux state as its argument and return a value.
//  example: const number=useSelector(state=>state.storevariabel)
                                            // ||
                                            // selector:function, equalityFn?:function

// useDispatch() Hook: it is hook return a reference to the dispatch function from the redux store. you may use it to dispatch actions as needed.
// example: const dispatch=useDispatch();









