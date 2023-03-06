import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Selfdata from './Components/Selfdata';

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar title = "Chisty's React App" mode = {mode} toggleMode={toggleMode} />
    {/* <div className="container">
      <About/>
    </div> */}
    <div className="container">
    <Selfdata heading = "Please enter your TEXT here...." mode = {mode} toggleMode={toggleMode}/>
    </div>
    </>
  );
}

export default App;

