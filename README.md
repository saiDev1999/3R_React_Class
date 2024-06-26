Tasks:

1. Repeat the class
2. Redux-thunk and redux saga difference
3. Remove from cart using redux
4. Weather app using redux

Topics:

1. Async and async actions in redux
2. Redux-thunk
3. Redux-devtool-extensions
4. Add to cart functuality

Actions are of 2 types

1. Synchronous actions
2. Asynchronous actions

Synchronous actions : As soon as user dispatch any action corresponding state manipulations occurs immediately

Asynchronous actions : As soon as user dispatch any action, async js takes some time to manipulate the state (Ex : data fetching)

redux doesn't handle the asynchronous actions directly , thats where we will dependent on the middle ware called as redux-thunk

redux-thunk is a middleware which returns the function instead of object (with in that function we can have async calls)

npm i redux-thunk

ex: fetch the data -> store in the redux

actions :

PRODUCT_FETCHING_REQUEST
PRODUCT_FETCHING_SUCCESS
PRODUCT_FETCHING_FAILURE

reducer :

initialState:{
products : [],
loading : true,
error : null
}

redux-devtool-extension : To debug the redux application in a easier way we use redux-devtool-extension
we can track every state changes , type of action , previous current state

Link : https://github.com/zalmoxisus/redux-devtools-extension
https://chromewebstore.google.com/detail/redux-devtools-next/oamphgegmigmlgkdnijmeomjenbmkbdg

Tasks:

1. Repeat the class
2. implement toy store in the redux
3. redux thunk importance
4. why react is popular with redux
5. redux and redux toolkit

Topics:

1. Profile actions in redux
2. useSelector , useDispatch hooks in react redux
3. react-redux configuration
4. combine reducers
