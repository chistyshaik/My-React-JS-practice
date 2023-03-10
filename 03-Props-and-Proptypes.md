### PROPS 
- The word “props” implies “properties”
- these props components are read-only components.
-  its working functionality is quite similar to HTML attributes.
- In ReactJS, the props are a type of object where the value of attributes of a tag is stored

``` javascript

import React from 'react'
import PropTypes from 'prop-types' //import prototypes


export default function Navbar(props) { //pass props parameter in function
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a  className="navbar-brand" href="/">{props.title}</a>  // write any js code in curly braces using parameter
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.About_me}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Resume</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>  
    </div>
  )
}

Navbar.protoTypes = {                           //pass prototypes in an object 
    title : PropTypes.string.isRequired,
    About_me : PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title : "Set title here",
    About_me : "Set About text here"
};

```