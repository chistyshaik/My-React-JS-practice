import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Selfdata from './Components/Selfdata';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }
  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has enabled ", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has enabled ", "success")
    }
  }

  return (
    <>
    <Navbar title = "Chisty's React App" mode = {mode} toggleMode={toggleMode} />
    {/* <div className="container">
      <About/>
    </div> */}
    <Alert alert= {alert} />
    <div className="container">
    <Selfdata showAlert = {showAlert} heading = "Please enter your TEXT here...." mode = {mode} toggleMode={toggleMode}/>
    </div>
    </>
  );
}

export default App;