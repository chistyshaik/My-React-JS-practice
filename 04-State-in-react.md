### State in React JS
- The state is a built-in React object that is used to contain data or information about the component

- There r fout types of states in React js they are :-
1. Local state
2. Global state
3. Server state 
4. URL state 



### Props vs State

- Props and State both hold information that influences the output of render, they are different in one important way i.e :

- props get passed to the component (similar to function's parameters) whereas

- state is managed within the component (similar to variables declared within a function).



### Some info About State in react


```javascript
import React, {useState} from "react";    //usestate is a hook in react
const [count , setCount] = useState(0);  // syntax of state variable in react

```

- the above state syntax must be placed in the function component only that too above the return statement.
- count is a function in the above syntax and setcount is the updated version function of count 
- the (0) in which we pass some data comes under the function count as default
- we can update the count function through setCount function, which means setCount is the updation function of count
- we can rename count and setcount with our choice names like we did in the below syntax
- note :- state is managed within the component ([count, setCount] are similar to variables declared within a function )






