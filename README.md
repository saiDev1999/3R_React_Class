Tasks :

1. Repeat the class
2. Read the lifecycle document from w3 schools
3. Authentication and authorisation
4. which is better functionl or class components in react

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
   The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

This is the natural place to set the state object based on the initial props.

It takes state as an argument, and returns an object with changes to the state.

1.4 Render -> To insert the jsx in the dom

2. Updating phase -> Elements or components updated inside the dom

   2.1 render : To show the updated elements or components in the dom
   2.2 getDerivedStateFromProps : To check the changes in the state based on the prop
   2.3 component did update :
   to perform the side effects in class component during updating phase

   side effects : side effect are async tasks like fetching data from server (http calls), dom manipulations, event listeners
   2.4 shouldComponentUpdate : it can restrict the component updates if it returns false
   or else we can update the component
   2.5 getSnapShotBeforeUpdate : it gives the state and prop before being updated
   , we can get the snap shots of the state nd props

3. Unmounting phase -> Elements or components removed from the dom
