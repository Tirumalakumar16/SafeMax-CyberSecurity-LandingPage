
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProtectedLayer from './pages/ProtectedLayer';
import VulnerabilityAssessment from './pages/VulnerabilityAssessment';
import SecurityAwareness from './pages/SecurityAwareness';
import AboutUs from './pages/AboutUs';
import Profile from './pages/admin';
function App() {

  // const {loading} = useSelector((state) => state.loader);
    const [loading, setLoading] = useState(true);
    
  return (
    <div>
    {loading &&
    <div className="loader-container">
      <div className="loader"></div>
    </div>
    
    }
   
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<ProtectedLayer ><LandingPage setLoading={setLoading}/></ProtectedLayer>} />
    <Route path='/Vulnerability-Assessment-Penetration-Testing' element={<ProtectedLayer><VulnerabilityAssessment setLoading={setLoading}/></ProtectedLayer>} />
    <Route path='/Security-Awareness-Training' element={<ProtectedLayer><SecurityAwareness setLoading={setLoading}/></ProtectedLayer>} />
    <Route path='/about-us' element={<ProtectedLayer><AboutUs setLoading={setLoading}/></ProtectedLayer>} />
    <Route path='/admin-work' element={<ProtectedLayer><Profile setLoading={setLoading}/></ProtectedLayer>} />
   </Routes>
   </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
