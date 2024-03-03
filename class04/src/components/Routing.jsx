import React from 'react'
import Home from './Home';
import About from './About';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Routing = () => {
  return (
      <>
        <BrowserRouter>
      <ul>
      <li><Link to='/'>Home</Link></li>
<li><Link to='about'>About</Link></li>
<li><Link to='link'>Link</Link></li>
</ul>
      
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/link" element={<Link/>}></Route>
        </Routes>
      
    
    </BrowserRouter>
    </>
  )
}

export default Routing
