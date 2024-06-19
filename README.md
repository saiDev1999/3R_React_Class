topics:

1. useReducer hook in react
2. useReducer + useContext combination in react
3. Global counter

tasks :

1. TODO using useReducer hook
2. Repeat the class
3. Go through w3 schools react topics , geeks for geeks (useReducer examples)

useState : To create and manage the state(less logic dependent data manipulation) (local state management)
useReducer : To create and manage the state (complex logics involved during data manipulation )

Syntax :

useReducer will accept 2 arguments

1. reducer function
2. initial state

useReducer will return array which contains 2 elements

1. current state
2. dispatch function

state={
name:"RCB"
teamPlayers:[{name:"virat"},{name:"maxwell}]
}

initialState - nested objects, nested arrays, simple data types

const[currentState,dispatchFunction]=useReducer(reducerFunction, initialState)

Try : why we use const always while creating the useState

useReducer + useContext:

salary : 1000

action : action is a object which tells us what needs to happen
ex: {
type: "INCREMENT_SALARY"
}
{
type: "DECREMENT_SALARY"
}
{
type: "CHANGE_NAME"
}

{
type: "ADD_TEAM_MEMBER"
}

reducerFuntion : reducerFunction is a pure function (only for data manipulation we dont perform any side effects)
reducerFuntion have the 2 parameters ( state and action)
reducerFuntion will decides what to happen based on the action that user performed

useReducer + useContext -> GLOBAL COUNTER
