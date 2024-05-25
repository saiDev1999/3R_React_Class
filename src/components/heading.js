import React from 'react'

function Heading({title}) {
    console.log("Heading re-rendering", title)
  return (
   <h1>{title} calculation</h1>
  )
}

export default  React.memo(Heading)