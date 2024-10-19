import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">FreshGuard</div>
      <div className="navbar-menu">
        <ul>
          <li onClick={() => handleTabClick('home')}><Link style={{textDecoration:'none',color:'white'}} to='/'>Home</Link>
            
            {activeTab === 'home' && <hr />}
          </li>
          <li className="link" onClick={() => handleTabClick('myitems')}><Link style={{textDecoration:'none' ,color:'white'}} to='/MyItems'>MyItems</Link>
            
            {activeTab === 'myitems' && <hr />}
          </li>
          
          <li onClick={() => handleTabClick('about')}><Link style={{textDecoration:'none',color:'white'}} to='/About Us'>About Us</Link>
            
            {activeTab === 'about' && <hr />}
          </li>
          <li onClick={() => handleTabClick('faqs')}><Link style={{textDecoration:'none',color:'white'}} to='/FAQs'>FAQs</Link>
            
            {activeTab === 'faqs' && <hr />}
          </li>
        </ul>
      </div>
      <div className="navbar-login">
      <Link to='LoginSignup'><button className="login-button">Login</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;



