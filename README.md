state : state is a object which holds the data or information of a particular component

state is mutable

state is private , we can't use in other component without forwarding

example: YOUTUBE button

state or data -> subscribe

 <!-- 
 Wrong usage 
 let message="subscribe"
 message="subscribed" -->

state can change to subscribed when event occurs

state can hold any type of data

To change the state we need to use setState method in react class components
direct re-assinging is not possible in react

There are 2ways to create state in react class based components

1. Object way of creation
2. constructor way of creation

3. we will show some list of employees , role , salary , experience

filters : roles
react developer
angular developer
All

salary

const arry=[
{
name :"biryani",
price:200
},
{
name :"haleem",
price:20
}
]

const discountPercentage=50
const totalWithDiscount = arry.map(eachObject=>{
return {...eachObject,quantity:2}
}).reduce((accumulator,current)=>{
return accumulator+(current.price*current.quantity)
},0)*((100-discountPercentage)/100)

console.log(totalWithDiscount)

Question :

1. 5 jars , each jar contains some candies
2. one jar contains poisonous candies

Our target is to find the poisonous jar

option : we can use digital machine for one time
poisonous candies weight is less than normal candies

normal candies weight 10 grams

poisonous candies weight 9 grams

jars contains > 100

A, B, C, D, E

1 candie
2 candie
3 candie
4 candie
5 candie

150

145
