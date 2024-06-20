Topics :

1. useMemo in react
2. React.memo
3. useCallback in react

Tasks:

1. Repeat the class
2. Repeat the examples of React.memo,useCallback,useMemo from w3 schools

3. useMemo
4. useCallback

5. UseMemo and useCallback are the memorization techniques in react application

example :

each milk packet 40rupees and sugar 10/kg

1. home --> day 1 -> 1 milk packet and 1kg sugar -> 50 rupees
2. day 2 -> 1milk and 1kg sugar -> 50 rupee

10 day :

useMemo : useMemo is a hook in react funtional components which memorizes the value(cache the value if same inputs were given)

useMemo is a optimisation techniques, which decrease the load time of the app when expensive calculations were happening

syntax :

useMemo accepts 2 args :

1. callback function -> a function where expensive calculations or normal calculations were happenings
   This function will return the cache result
2. array-> based on the dependency array callback funtion will executes

example : counter 1 and counter 2 which age and salary

age -> even or odd ->

const isEven=

useMemo((num)=>{
let even=num%2===0
retun even ? "EVEN" : "ODD"
},[age])

isEven(age)

note : Even though we didn't used isEven for salary , by defualt behaviour of react will recalculates the result even when salary changes

useCallback:

1. useCallback is also memorization technique in react
2. useCallback will memorizes the function
3. This is also optimisation technique in react

syntax : useCallback accepts 2 args

1. callback function -> a function where we need to memorize , This function dosn't return anything
2. array-> based on the dependency array callback funtion will executes

React.memo or pure component in class components :

1. funtional component we have React.memo
2. using React.memo we can skip the re-renders of the components, whenever state or prop doesn't changes
3. React.memo is a HOC (higher order component)

hoc: a component passed as a argument to other components which gives the enhaced components from where we can reuse the funtional logic

React.memo(App)
