Tasks:

1. Repeat the class
2. Registration form
3. UI of registration form
4. Apply validations
5. set the user data in local storage

Uncontrolled forms :

1. consider the form in jsx , create component
2. Based on the inputs, create reference to the dom using useRef hook and attach the reference using ref attribute
3. onSubmit collect the user inputs using reference.current.value

Forms :

generally we have 2 ways for forms in react

1. Controlled component

In controlled components user input state will be controlled by the react itself
field validations were possible (individual validations)

2. Uncontrolled component
   In uncontrolled components user input state will be controlled by the DOM
   only entire form validation can be done at one time (after clicking submit , all fields will be validated )

Validation were must be used while dealing with forms
client side validation
server side validation
