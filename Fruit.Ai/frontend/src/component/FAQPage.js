import React from 'react';
import { useNavigate } from 'react-router-dom';
import FAQList from './FAQList';
import '../css/FAQPage.css';

const FAQPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home');
  };

  return (
    <div className="faq-page-container">
      <button onClick={handleBackClick} className="back-button">Back to Home</button>
      <h1 className="page-title">FAQs</h1>
      <FAQList />
    </div>
  );
};

export default FAQPage;
