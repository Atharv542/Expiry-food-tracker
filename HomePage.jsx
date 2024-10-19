import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate =useNavigate(); 

  
  const goToMyItems = () => {
    navigate('/MyItems'); 
       
  };
  const goToFAQs = () => {
     
    navigate('/FAQs');   
  };


  return (
    <div className="home-container">
      <h1 className="hero-line">FreshTrack: Keep Food Fresh, Waste Less</h1>
      <p className="description">
        <span>The average family throws away 30% of their groceries- don't let that be you!</span><br></br>Welcome to a smarter way to manage your kitchen! Our platform helps you keep track of all your food products, ensuring you never miss an expiry date.
      </p>
      <div className="cta-buttons">
        <button onClick={goToMyItems} className="cta-button">MyItems</button>
        <button onClick={goToFAQs}  className="cta-button">Have Doubt?</button>
      </div>
    </div>
  );
};

export default HomePage;
