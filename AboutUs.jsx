import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>
          We are a team committed to reducing food waste by helping you track and manage food expiry dates. Our goal is to create a sustainable future, where no meal goes to waste.
        </p>
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to help households and communities reduce food waste by providing a seamless way to track the expiry dates of their groceries. We believe that no meal should go to waste, and through better organization and smarter planning, we aim to empower people to make the most of the food they have.
        </p>
        <p>
          By promoting sustainable habits, we are tackling the global issue of food waste, one home at a time. Our platform encourages conscious consumption and helps you avoid unnecessary waste while contributing to a healthier planet. Together, we can create a world where fresh food stays fresh, and the resources we depend on are used wisely.
        </p>
      </div>

      <div className="team">
        <h2>Meet Our Team</h2>
        
        <div className="team-member">
          
          <h3>Atharv Ragdwal</h3>
          <h4>Data Analyst</h4>
          <p>
            Atharv is the expert behind the numbers, ensuring our platform is always improving through data insights. As the Data Analyst, he meticulously studies user patterns, food expiration data, and trends to provide actionable insights that drive our mission forward. His analytical skills help us offer users a tailored experience to minimize food waste and promote sustainable consumption. Atharv’s passion for data and the environment makes him a crucial part of the team.
          </p>
        </div>

        <div className="team-member">
          
          <h3>Deepanshu Sharma</h3>
          <h4>Lead Developer</h4>
          <p>
            Deepanshu is the technical architect of the platform. As the Lead Developer, he brings our vision to life through clean, efficient, and user-friendly code. He ensures that the food tracking system operates smoothly and intuitively, making it easy for users to log, track, and manage their food items. With a deep commitment to functionality and user experience, Deepanshu's expertise is the foundation of our fight against food waste. His passion for datamakes him a crucial partof team.
          </p>
        </div>

        <div className="team-member">
          
          <h3>Ansh Chauhan</h3>
          <h4>Marketing Specialist</h4>
          <p>
            Ansh is the creative force responsible for spreading the word about our mission. As the Marketing Specialist, he develops engaging campaigns that inspire our users to reduce food waste and adopt sustainable habits. His innovative strategies and passion for the cause have helped us build a strong, motivated community. Ansh's work ensures that our message reaches those who need it most, encouraging everyone to make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

