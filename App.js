import React from 'react'
import Navbar from './Components/Navbar';

import LoginSignup from './Components/Pages/LoginSignup'
import MyItems from './Components/Pages/MyItems'

import AboutUs from './Components/Pages/AboutUs';
import HomePage from './Components/Pages/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FAQs from './Components/Pages/FAQs';






function App() {
  return (
    <div>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/MyItems' element={<MyItems/>}/>
        <Route path='/FAQs' element={<FAQs/>}/>
        <Route path='/About Us' element={<AboutUs/>}/>
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
        

      </Routes>
    </BrowserRouter>

       
    </div>
  );
}

export default App;