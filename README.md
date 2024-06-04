tasks :

1. Repeat the class
2. Style the product listing page
3. Skeleton loading in react
4. Attach the spinner our product listing

fetch: fetch is browser provided web api
fetch returns the promise
fetch doesn't convert to json
fetch doesn't provide the status codes, based on status code we need to let the user know whats happening
fetch doesn't support the request and response intercepting

fetch("").then(res=>res.json()).then(res=>console.log(res))

http request -> client to server
server to client

status codes :
200
300
400
500

axios : axios is the third party library
http request
fetch returns the promise
fetch will convert to json
axios will provide the status code
axios will support the request and response intercepting
