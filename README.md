Tasks:

1. Repeat the class
2. Todo in funtional components
3. create some common components ex: card , pass the props
4. try example from https://react.dev/learn/state-a-components-memory
5. read about https://react.dev/learn/responding-to-events

Drawbacks / limitations of class based components

1. this keyword usage
2. complex syntax
3. code will spilted into different methods for single functuality
4. life cycles methods

Functional components hooks introduced in 2018 version 16.8
Hooks : Hooks are simple javascript prefined functions , it let us use of state and other react features without writing the class
Hooks will start with use keyword

Examples :

1. useState
2. useEffect
3. useRef
4. useContext
5. useReducer
6. useMemo
7. useCallback
8. custom hooks

rules of hooks:

1. Hooks must always call at the top of the component
2. Hooks cannot be used inside the conditions, loops, but we can use conditions inside the hooks
3. Hooks only used in functional based components

useState: useState is a hook in react functional components, which creates and manages the state

it is replica of class constructor state creation + setState in class components

syntax :

1. useState will accept the initialVariable (any data type)
   useState(null)

2. useState will returns the array

const arry = useState(0)

const[current,setCurrent]=useState(0)

this arry consists 2 elements ,
1st -> currentState value
2nd -> updaterFunction (to update the currentState value)

we can create as many independent states in functional components
