import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Selfdata from './Components/Selfdata';

function App() {
  return (
    <>
    <Navbar title = "Chisty's React App" About_me = "About me"/>
    <div className="container">
      <About/>
    </div>
    <div className="container">
    <Selfdata heading = "Please enter your TEXT here...."/>
    </div>
    </>
  );
}

export default App;

