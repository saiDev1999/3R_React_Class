

UseState : To manage the state in functional based we use useState 

useState -> create state and mutuate 

useState -> local state management 

initialValue -> string,numbers,boolean etc 

const [currentValue,updaterFunction]=useState(initialValue)



usEffect : Side efffects 
side effects :
https req, dom , timers,event listners 


syntax : useEffect(()=>{},[])


addEventListeners 
start timer 

hit the server 


useRef : 
1. to access the dom directly 
2. to persists the values (.current)
3. it doesn't re-render when updated 




Global state management  -> 
1. props 
2. context api
3. redux 

useContext + useState -> global state management state , less complex logics

useContext + useReducer -> global state management for the state which have complex state logics

ex: Global counter 


useReducer : 

2 args accept 
const[currentValue,dispatch]=useReducer(reducerFn,initialState)

reducerFn: It is pure function which manipuates the state based on the action
initialState: {

}

currentValue
dispatch : function which changes the current value, it will trigger the action


useMemo : useMemo is used to memorize the value

useMemo(()=>{},[])



React.memo -> prevents the re-renders when ever prop or state doesn't change
React.memo -> HOC -> A component passed as a argument to other component which reuse the funtuality 

React.memo(UserDefinedComponent)

useCallback : to memorize the funtion 



