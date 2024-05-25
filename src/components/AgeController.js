import React from 'react'

function AgeController({age,increaseAge}) {
    console.log("AgeController re-rendering.....")
  return (
    <div>
        <h2>Current age {age}</h2>
        <button  onClick={increaseAge} >Click to increment</button>
    </div>
  )
}

export default React.memo(AgeController)