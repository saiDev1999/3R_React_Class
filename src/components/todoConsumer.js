

import React, { useContext } from 'react'
import { information } from '../App'

function TodoConsumer() {
    const {todo,addTodoFn,cartCount,countInformation,handleIncrement}=useContext(information)

  return (
    <div>
        <button onClick={addTodoFn} >Add todo {cartCount}</button>
        <h4>{countInformation.count} from todoConsumer</h4>
        <button onClick={handleIncrement} >Click to increase</button>
        
    {
      todo.map((eachTodo,index)=>{
        return(
          <React.Fragment key={index} >
          <h2  className="h2Tag" >{eachTodo}</h2>
          </React.Fragment>
        )
      })
    }


    </div>
  )
}

export default TodoConsumer