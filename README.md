Tasks:

1. Repeat the class
2. design useInternet hook to check the online status
3. Todos , recipes , products , users api
4. show the data in the UI
5. read blogs about custom hooks

Topics :

1. Useeffect memory leaks
2. Custom hooks in react
3. useCounter hook
4. useAxios hook (success,error, loading)cases
   useEffect :

Memory leak : Data leaks in the projects ,
using useEffect we can prevent memory leaks within the applications
while leaving component , if you want to perform anything we can utilize the return of useEffect

syntax: useEffect(()=>{
return()=>{
// preventing the memory leaks
}
},[])

custom hooks :

custom hooks are reusable functions in react ,
if you find same logic applying different components , here we can make custom hook the logic and reuse them in multiple components

custom hook were designed using predefined hooks
custom hook should also start with use keyword
custom hook should also obey the rules of hooks

useCounter : counter logic
