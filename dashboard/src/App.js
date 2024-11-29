import { Navigate } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Products from './Pages/Products';
import { createContext,useState } from 'react';
import Home from "./Pages/Dashboard_page"
import Sidebar from './Component/Sidebar'
import Header from './Component/Header'
export const DarkLightContext=createContext();

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [sidebar,setSidebar]=useState(false);

  return ( 

<DarkLightContext.Provider value={{setDarkMode,darkMode,sidebar,setSidebar}} >
  <Router  future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Sidebar/>    
    <div className='mx-auto'>
      <Header/>    
  <Routes>    
      <Route path="/" element={<Navigate to="/Home" element={<Home/>}/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Products" element={<Products />} />
    </Routes>
    </div>
  </Router>
</DarkLightContext.Provider>
)
}

export default App;
