
import Button from "./components/button/button.js"
import ListComponent from "./components/list/list.js"
import Heading1,{Heading2 as SecondaryHeading,Heading3,Heading4,Heading5} from "./components/headings/headings.js"


function Hello(){
  const isSubscibed=false

  const employees=[
    {
      name:"Srikanth",
      role:"Full stack developer",
      salary:200000
    },
    {
      name:"sai naik",
      role:"React developer",
      salary:100000
    },
    {
      name:"pavan",
      role:"Angular developer",
      salary:150000
    },
    {
      name:"pavan",
      role:"Angular developer",
      salary:150000
    }
  ]


  return(
    <>

    {
      employees.map((eachEmployee,index)=>{
        return(
          <div>
            <h2>{index+1}</h2>
            <h3>{eachEmployee.name}</h3>
            <h3>{eachEmployee.salary}</h3>
          </div>
        )
      })
    }
    
     

    </>
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