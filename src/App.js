import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

const[alert,setAlert] = useState(null);


const [myStyle, setMyStyle] = useState({
  color : 'black' ,
  backgroundColor : 'white',
})

const showAlert = (message, type) => {
  setAlert({
    message : message,
    type : type
  })
  
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

  const[mode,setMode] = useState ('light');

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'Text Utils - Light Mode';

      setMyStyle({
        color : 'black' ,
        backgroundColor : 'white',
    })
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#393939';
      document.title = 'Text Utils - Dark Mode';

      setMyStyle({
        color : 'white' ,
        backgroundColor : 'grey',
    })
    }
  }
  return (
  <>
  <Router>
  <Navbar mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
  <div className="container my-3">
    <Routes>
  <Route exact path = "/" element = {<Textform heading="Enter your text:" mode = {mode} showAlert = {showAlert} />} />
  <Route path="/about" element={<About myStyle= {myStyle} />} />
   </Routes>
  </div>
  </Router>
  </>  
  );
}

export default App;
