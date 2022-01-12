import './App.css';
import { useState, useEffect } from "react";
import {AppContext} from "./react-context/appContext"
import Navbar from "./component/Navbar"

const App = () => {

  const [info, setInfo] = useState({})
  const [bioData, setBioData] = useState({})
    
  useEffect(() => {
      const info = {
          location: "Jalan Tambak Boyo Lor",
          type: "Kost Putri Pak Kaji"
      }
      
      const bioData = {
        nama: "Maulana Yusuf Muhibbin",
        alamat: "Jalan Tangerang Jaya",
        hobi: "Ngoding"
      }
      
      setBioData(bioData)
      setInfo(info)
  })
  
  const appContextValue = {
    info, 
    setInfo,
    bioData,
    setBioData
  }
  
  return (
    <div className="App">
      <AppContext.Provider value={appContextValue}>
        <Navbar />
      </AppContext.Provider>
    </div>
  );
}

export default App;
