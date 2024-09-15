import React from 'react';
import { Link } from 'react-router-dom';
import chat from "../assets/chat.jpeg";
import about from "../assets/about.jpeg";
import faqImage from "../assets/faqImage.jpeg";
import translator from "../assets/translator.jpeg";
import "../css/HomePage.css"; // Keep the updated CSS file for new styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="hero-section">
        <header className="homepage-header">
          <h1 className="homepage-title">Fruit.AI</h1>
          <p className="homepage-tagline">"Empowering you with smart, healthy choices"</p>
        </header>

        <div className="features-grid">
          {/* Chat Support Feature */}
          <Link to="/chatbot" className="feature-card chat-feature">
            <div className="feature-card-content">
              <img src={chat} alt="Chat" className="feature-image" />
              <div className="feature-info">
                <h2 className="feature-heading">AI Chat</h2>
                <p className="feature-description">Confidential, 24/7 assistance at your fingertips.</p>
              </div>
            </div>
          </Link>

          {/* Translator Feature */}
          <Link to="/translator" className="feature-card translator-feature">
            <div className="feature-card-content">
              <img src={translator} alt="Translator" className="feature-image" />
              <div className="feature-info">
                <h2 className="feature-heading">Instant Translator</h2>
                <p className="feature-description">Translate food facts and tips across languages.</p>
              </div>
            </div>
          </Link>

          {/* FAQ Feature */}
          <Link to="/faq" className="feature-card faq-feature">
            <div className="feature-card-content">
              <img src={faqImage} alt="FAQs" className="feature-image" />
              <div className="feature-info">
                <h2 className="feature-heading">FAQs</h2>
                <p className="feature-description">Quick answers to your fruit-related queries.</p>
              </div>
            </div>
          </Link>

          {/* About Us Feature */}
          <Link to="/about" className="feature-card about-feature">
            <div className="feature-card-content">
              <img src={about} alt="About Us" className="feature-image" />
              <div className="feature-info">
                <h2 className="feature-heading">Who We Are</h2>
                <p className="feature-description">Discover our mission and how we help you stay healthy.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <footer className="homepage-footer">
        <p className="footer-text">© 2024 Fruit.AI. Enhancing life through AI-powered wellness solutions.</p>
        <div className="footer-decor">
          <span className="footer-decor-dot"></span>
          <span className="footer-decor-dot"></span>
          <span className="footer-decor-dot"></span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
