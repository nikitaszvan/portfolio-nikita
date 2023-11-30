import React, {useState, useEffect} from "react";
import {SquareLoader} from 'react-spinners';
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    
    const handleLoading = () => {
    setIsLoading(false);
    }
    
    useEffect(()=>{
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
    },[])
    
    return  !isLoading ? (
    <div className="App">
      <FirstSection/>
      <SecondSection/>
    </div>
    )
    :(<div><SquareLoader color="black" /></div>)

  }
    
    

export default App;