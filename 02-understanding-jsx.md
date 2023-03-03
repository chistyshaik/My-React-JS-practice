### JSX 
- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React
- JSX makes it easier to write and add HTML in React.
- JSX is an HTML-like syntax that you can use with React to (theoretically) make it easier and more intuitive to create React components.
- JSX performs optimization while compiling the source code to JavaScript
- The JSX generated code runs faster than an equivalent code written directly in JavaScript.


### Most Important point to remember while using jsx in react 

Note :- If we r using JSX in react we need to remeber that we can only return ***ONE ELEMENT***.

- It means adjacent JSX elements must be wrapped in an enclosing tag

```javascript
// in the below code function App() is returning only one div i.e className = App

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first React Project on Day-1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Chisty.Shaik
        </a>
      </header>
    </div>
  );
}

export default App;

```

### Any alternate to add jsx below or above elememts ?
-  yes , use JSX fragment <> </>

```javascript
// in the below code function App() is returning only one div i.e className = App

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>                  //Jsx fragment started
    <h1>I will be display on top of the below div</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first React Project on Day-1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Chisty.Shaik
        </a>
      </header>
    </div>
    </>            //JSX fragment ended
  );
}

export default App;

```

