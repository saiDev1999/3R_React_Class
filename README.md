Topics:

1. UseEffect introduction
2. Importance of dependency array
3. case wise useEffect study
4. count based api calls
5. dom manipulation based on useEffect

Tasks:

1. Repeat the calls
2. Hit the product listing api , based on length show the buttons
3. Hit the product details api, based on the click of particular button, show in UI
4. Hit the category api , show the buttons https://fakestoreapi.com/products/categories
5. When we click on category button hit https://fakestoreapi.com/products/category/jewelery , show in UI

useEffect hook

useEffect is a hook in react funtional components , which allows us to cause the side effects in the component

3 life cycles replica:

1. component did mount
2. component did update
3. component will unmount

side effects examples :

1. Https calls
2. Dom manipulations
3. Event listeners
4. any third party subscribtions

useEffect syntax :

useEffect will accept 2 args

1. callback function
2. array (dependency array)

Note : Behaviour of useEffect will vary depending upon the dependency array
syntax : useEffect(()=>{},[])

case 1 : empty dependency array
useEffect(()=>{},[])

1. useEffect will acts like a component did mount life cycle method
2. useEffect will runs only in the first when page loads
3. Initial https calls (API calls)

case 2 : No dependency array
useEffect(()=>{})

1. useEffect will call everytime whenver any state or prop changes
2. sometimes it can leads to infinite loop
3. app will frozen

case 3 : dependency array with variables
useEffect(()=>{},[variable1,variable2,variable.....])

1. useEffect will acts like a component did update lifecycle method
2. whenever variables changed in the array , useEffect will auto invoke
3. Results will carry forward side effects in the updating phase

case 4 : whenever callback funtion returns another function,
useEffect(()=>{
return ()=>{

    }

},[])

1. In this case useEffect will act as component will unmount
2. returned function will be invoked whenever component removed from dom
3. we can prevent the memory leaks , which enhances the performance (clean up phase)
