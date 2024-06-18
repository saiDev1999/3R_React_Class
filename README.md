tasks :

1. Repeat the class
2. take a route for add employee and employee list, on adding the employee , employees has to be added in the employee list using global state mangement
3. add employee contains the forms which collects the name, salary and designation
4. prop drilling and what is the global state mangement
5. context api document

topics:

1. Prop drilling
2. global state management
3. context api
4. useContext hook usage
5. global counter using context api

<!-- Props :  -->

Prop drilling : Prop drilling is a way to share the data between nested components to reach the final or targeted component

Drawbacks of prop drilling:

1. Every intermediate child component needs to disturb
2. difficulty in mainataining the code (as component structure grows)
3. sclability gets difficult
4. every component will participant even though we are not using data in the respective component

5. Context api
6. Redux

<!-- State management -->

Managing the data across the application we call it as the state management
Every application needs better state management for scalable and maintanable code

state management is of 2 types

1. local state management (useState)

2. global state management

3 ways :

1. Using props (prop drilling)
2. Context api
3. Redux

context api :
context api is a way to manage the global state in the react application

useState + useContext hooks for global state management -> normal states normal logic

useReducer + useContext hooks for global state mangement -> complex state complex logic

steps for context api :

1. choose the components that needs to share the data
2. create a context using createContext method from react , globally
3. wrap the components using provider with the created context across the targetted components
4. pass the value prop to the provider and give the data that needs to be shared
5. choose the targetted component and consume the data using useContext hook , and pass the created context as a argument

useContext hook :
it is used for sharing the data globally and consuming it
