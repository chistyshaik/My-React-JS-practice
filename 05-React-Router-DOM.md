### React Router Dom 

***React Router DOM is an npm package that enables you to implement dynamic routing in a web app.*** 

- It allows us to display pages and allow users to navigate them. 
- It is a fully-featured client and server-side routing library for React. 
- React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. 
- This process is called Routing and it is made possible with the help of React Router Dom.

after installing react-app package , next install react-router-dom library in terminal

Installation Process in terminal

### Step - 1 


```node
    npm install react-router-dom
```

### React Router Dom has many useful components and to create fully functioning routing, we need most of these.

***1.Router(usually imported as BrowserRouter)*** :-
  It is the parent component that is used to store all of the other components. Everything within this will be part of the routing functionality


***2. Switch*** :-
 Switch component is used to render only the first route that matches the location rather than rendering all matching routes.


***3. Route*** :-
 This component checks the current URL and displays the component associated with that exact path. All routes are placed within the switch components.


***4. Link*** :-
 Link component is used to create links to different routes.

- import the above react router dom components at the top in app.js 


### Step - 2

```node

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

```

- we can use any react router dom components as required 
- in this project im using switchs