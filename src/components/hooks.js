import React, { useCallback, useMemo, useState } from 'react'
import Heading from './heading'
import AgeController from './AgeController'

function Hook() {

    const[age,setAge]=useState(20)
    const[money,setMoney]=useState(2000)

    const ageIncrement= useCallback(()=>{
        setAge(age+1)
    },[age])

    const moneyIncrement=useCallback(()=>{
        setMoney(money+1000)
    },[money])

    const evenChecker = useMemo(() =>{
        console.log("even checker function executing......")
        return age%2===0 ? "EVEN":"ODD"
    },[age])

  return (
    <div>
        <Heading  title={"AGE"}  />
        <AgeController  age={age} increaseAge={ageIncrement} />
        <h2>Age :{age}</h2>
        <h2>Age even checker {evenChecker}</h2>

        <Heading  title={"MONEY"}  />
        <h2>Money :{money}</h2>
        <button onClick={ageIncrement} >Age increse button</button>
        <button onClick={moneyIncrement} >Money increse button</button>


    </div>
  )
}

export default Hook