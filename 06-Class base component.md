### Class Based Components

- Class component will be created using the **class** keyword, and it **extends** the React. Component to make the class as a react component.

-  All class based components are child classes for the Component class of ReactJS. 

### Syntax of Class Components

**NOTE :-THE COMPONENT NAME'S FIRST LETTER SHOULD BE IN UPPERCASE**
```Javascript

import React, { Component } from 'react'

export default class ComponentName extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

```
### What is the main feature of class component ?

- The main feature of class-based components that distinguished them from functional components is that they have access to a state which dictates the current behavior and appearance of the component (Later, with React Hooks introduced in version 16.8, we are able to declare a stateful component without declaring a class). This state can be modified by calling the setState() function. One or more variables, arrays, or objects defined as part of the state can be modified at a time with the setState() function.

### What is constructor in react class component ?

**Constructor is a method used to initialize an object's state in a class.**
**which means It is automatically called during the creation of an object in a class.** 

### Syntax of a Constructor

```Javascript

    constructor(){
        super()
        console.log("hello im a newsitem component");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

```
-  The constructor in a React component is called before the component is mounted.
-  It is necessary to call super() within the constructor.
-  To set property or use 'this' inside the constructor it is mandatory to call super()
-  It is not necessary to have a constructor in every component.


**Differences between FUNCTIONAL and CLASS COMPONENTS**

![Alt text](../My-React-JS-practice/my-react-app/src/images/function%20vs%20class%20base%20components.png)