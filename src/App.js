
import Button from "./components/button/button.js"
import ListComponent from "./components/list/list.js"


function Hello(){
  return(
    <div>
      <h1>Hello world</h1>
      <Button />
      <h1>Hello world</h1>
      <Button />
      <h1>I am login</h1>
      <Button />
      <h1>I am signup</h1>
      <Button />
      <ListComponent/>

    </div>
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