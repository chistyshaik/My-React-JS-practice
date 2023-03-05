import React, {useState} from "react";    //usestate is a hook in react

//const [count , setCount] = useState(0);
// the above state syntax must be placed in the function component only that too above the return statement.
// count is a function in the above syntax and setcount is the updated version function of count 
// the (0) in which we pass some data comes under the function count as default
// we can update the count function through setCount function, which means setCount is the updation function of count
// we can rename count and setcount with our choice names like we did in the below syntax
// note :- state is managed within the component (similar to variables[count, setCount] declared within a function selfData() ).



export default function Selfdata(props) {

  const handleUpClick = ()=>{
    console.log("button was clicked" + text )
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // we must pass event object and event.target.value just while we take input-values from user like we r taking users typed data in text box in this project
    console.log("onchange")
    setText(event.target.value)
  }


const [text, setText] = useState("Enter text here........");
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value = {text}
          onChange={handleOnChange} 
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >
        Capitalize text
      </button>
    </div>
  );
}
