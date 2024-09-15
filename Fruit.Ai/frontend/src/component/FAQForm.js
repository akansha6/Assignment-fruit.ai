import React, { useState } from 'react';
import { createFAQ } from '../api/api'; // Ensure correct import
import { useNavigate } from 'react-router-dom';
import '../css/FAQForm.css';

const FAQForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [image, setImage] = useState(null);
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('question', question);
    formData.append('answer', answer);
    if (image) {
      formData.append('image', image);
    }

    try {
      await createFAQ(formData);
      setNotification('FAQ added successfully!');
      setTimeout(() => navigate('/faq'), 2000); // Redirect to FAQ list after 2 seconds
    } catch (error) {
      setNotification('Failed to add FAQ.');
      console.error('Error adding FAQ:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="faq-form-wrapper">
      <h2 className="form-title">Add New Fruit Information</h2>
      {notification && <p className="notification">{notification}</p>}
      <form onSubmit={handleSubmit} className="faq-form">
        <div className="form-group">
          <label htmlFor="question">Fruit Name:</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Description:</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-file"
          />
        </div>
        <button type="submit" className="submit-button">Add Fruit</button>
      </form>
    </div>
  );
};

export default FAQForm;
