
import axios from "axios"
import React, { createContext, useEffect, useReducer, useRef, useState } from "react"
import TodoConsumer from "./components/todoConsumer"
import { INCREMENT, incrementAction, initialState, reducerFunction } from "./functions/reducer"
import Hook from "./components/hooks"



export const information=createContext()




function Hello(){

  const[todo,setTodo]=useState(["apple"])
  const [products,setProducts]=useState([])
  const inputReference=useRef()
  const[currentState,dispatch]=useReducer(reducerFunction,initialState)


  const addTodoFn=()=>{
    setTodo([...todo,"new fruit"])

  }


  useEffect(()=>{ 

    // console.log(inputReference)

    // window.addEventListener("mousemove",(event)=>{
    //   console.log(event)
    // })

    return ()=>{
      window.removeEventListener("mousemove",(event)=>{
        console.log(event)
      })
    }
  
  },[])

  const fetchData = async() => {

    const response = await  axios.get("https://fakestoreapi.com/products")
    if(response.status===200){
      //store the data locally 
      setProducts(response.data)
    }



  }

  const handleIncrement=()=>{
    dispatch({
      type:INCREMENT
  })

  }



  return(
    <information.Provider value={{
      todo:todo,
      addTodoFn:addTodoFn,
      profileInfo:{
        name:"sai"
      },
      cartItems:[{},{}],
      cartCount:1,
      countInformation:currentState,
      handleIncrement:handleIncrement

    }}  >
      <Hook/>


    {/* <button onClick={addTodoFn} >Click to add new fruit</button>

    <h2>Counter value {currentState.count}</h2>

    <button onClick={handleIncrement} >Click to increment</button>

    <input
    className="userInput"
    
    type="text"
   


    />

    <TodoConsumer/> */}


  
     
</information.Provider>

  )

}

export default Hello









// Component : Component is a piece of reusable and independent bits of code 
// which is responsible for creating the User interface

// Every components will return  the mark up lang
// component must always start with capital 

// 2 types of component
// 1. class based components
// 2. Functional based components -> most preffered

// Functional based components : This is simply created using normal js functions