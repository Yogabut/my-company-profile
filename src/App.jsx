import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ProjectDetailPage from './Pages/ProjectDetail.jsx'
import AllProject from './Pages/OtherProject.jsx'
import ServiceDetailPage from './Pages/Service.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Footer from './Components/Footer/index.jsx'
import NotFound from './Pages/NotFound.jsx'
import './App.css'


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id/:title' element={<ProjectDetailPage />} />
          <Route path='/all-project' element={<AllProject />} />
          <Route path='/services/:id/:title' element={<ServiceDetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App