import './App.css';
import Navbar from './Components/Navbar';
import Selfdata from './Components/Selfdata';

function App() {
  return (
    <>
    <Navbar title = "Chisty's React App" About_me = "About me"/>
    <div className="container">
    <Selfdata heading = "Please enter your email here...."/>
    </div>
    </>
  );
}

export default App;

