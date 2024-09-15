import React from 'react';
import "../css/AboutPage.css";


const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="page-title">About Fruit.Ai</h1>
        
        {/* Section for mission or vision */}
        <section className="mission-vision">
          <h2>Our Mission</h2>
          <p>At Fruit.Ai, our mission is to revolutionize the way you experience fruits. We are committed to providing you with comprehensive information and personalized recommendations to help you make informed choices about your fruit intake. Our goal is to support your health and well-being by making fruits a delightful part of your daily life.</p>
        </section>

        {/* Section for features or benefits */}
        <section className="features-benefits">
          <h2>Features & Benefits</h2>
          <ul>
            <li>Discover a wide variety of fruits and their benefits.</li>
            <li>Get personalized fruit recommendations based on your health needs.</li>
            <li>Learn about nutritional values and how to incorporate fruits into your diet.</li>
            <li>Stay updated with the latest trends and information about fruits.</li>
          </ul>
        </section>

       

        
        <section className="call-to-action">
          <h2>Get Started</h2>
          <p>Ready to enhance your fruit experience? <a href="/
          " className="cta-link">Sign up</a> for personalized fruit recommendations and start your journey towards a healthier lifestyle today!</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
