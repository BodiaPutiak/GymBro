import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/HomePage';
import Contact from './components/Contact';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import ClassesPage from './components/ClassesPage';
import Schedule from './components/Schedule';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function App() {
  
const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [pathname]);
  return (
    <Routes>
      <Route exact path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/classes' element={<ClassesPage />} />
        <Route path='schedule' element={<Schedule />} />
      </Route>
    </Routes>
  )
}

export default App
