import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import About from "./component/About";
import { useState } from "react";
// import Alert from "./component/Alert";


function App() {
  const [mode, setMode] = useState('light ');

  // const [alert, setAlert] = useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     // yha pr alert ek object hai 
  //     msg:message,
  //     type:type

  //   })

  // }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.background='#042743'
      // showAlert("dark mode has been enable","success")
    }
    else
    {
      setMode('light');
      document.body.style.background='white'
      // showAlert("white mode has been enable","success")

    }
  }
  return (
    <>
    <div classNameName="body">
      
      <Navbar giri="CaseConverter"  mode={mode} toggleMode={toggleMode}
      aboutsText="AboutUs" homeChange="Homes"/>
      <div classNameName="container my-3 ">
      {/* <Alert alert={alert} /> */}
      <TextForm heading="Enter  the text to analyze" mode={mode} />
      

      {/* <About/> */}
      </div>
    
    </div>
    </>
  );
}

export default App;