

1. Repeat the class 
2. List out the limitations of using react
3. Rendering the list items in react using map 
4. Show the ipl teams names and team player names using map method
5. Show the ipl teams names and team player names using map method in a table format






List rendering :

In react we will render the list(array) using map method
map is used to iterate the UI in the jsx

whenever we are using map method we must include the key(prop),
This helps react to give unique id to the elements which results in faster updates and deletes 
We can increase the performance of react app

Fragments : 
1. <></>
2. <React.Fragment></React.Fragment>

limitation of fragment:
1. we cannot apply the styles 



React features :

1. Virtual dom : for effient updates , less loading time
2. Component-Based Architecture : divide and conquer ,  entire screen will be build based on the blocks of codes called as Components
3. Unidirectional Data Flow : data flow will happen from parent to child
4. Declarative Syntax : we will give whatever we want directky without using any dom methods
5. JSX : we can embed markup in js file

note: Browser doesn't understand the JSX code directly 
Babel is used for converting JSX code to the JS object notation code
Babel is inbuilt in react
Babel is a transpiler
 

Advantages of react :
1. Large and Active Community
2. Ecosystem and Tooling  ex: phone pay in react app, google signi in
3. Backed by Facebook : More users - less chance of degrading 
4. Smooth Migration and Integratio : we can migrate easily
 https://transform.tools/html-to-jsx 
5. We can go with mobile apps using React native





Dom : Document object model drawbacks

1. Wherever any element changes entire dom has to reload , updates will slower,
response time is more, loading time will be more 


Virtual dom : This is memory representation of original dom (copy of dom)
Wherever any element changes instead of reloading entire dom , it will only change the particular element or component

2 algorithms :
1. diffing : whenever any change occurs it will compare the previous and current dom, 
comparison will happen at this
2. reconcilliation : Updating the changes will happen here 

using v-dom we can have faster updates and less loading time
ex: Youtube button , Instagram likes














3 lions 3 deers

cross the river 

1. One boat 
2. If deer count is less than lion count , lion will eat the deer
3. at a time boat 2










Output : everyone has to reach safely

