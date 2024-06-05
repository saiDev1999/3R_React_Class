Tasks:

1. Repeat the class
2. Filter the data on click of buttons(take the roles buttons)
3. axios and fetch
4. Class and functional components
5. Atomic design in react

Earth
Human life cycle

1. Birth phase
2. survival phase
3. Expiry phase

dom
component life cycle

1. Mounting phase -> Elements or components inserted inside the dom
   (auto invoke)
   1.1 Contructor -> To initialize the state in react class based components
   1.2 Component did Mount -> to perform the side effects in class component during early phase

   side effects : side effect are async tasks like fetching data from server (http calls), dom manipulations, event listeners
   componentDidMount will run only once in a life cycle

   1.3 getDerivedStateFromProps
   1.4 Render -> To insert the jsx in the dom

2. Updating phase -> Elements or components updated inside the dom
3. Unmounting phase -> Elements or components removed from the dom
