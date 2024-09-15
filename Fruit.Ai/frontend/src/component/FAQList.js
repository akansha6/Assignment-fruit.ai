import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/FAQList.css';

// Base URL for the API
const API_BASE_URL = 'https://fruit-ai-oi8l.onrender.com/api';

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFAQs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/faqs`);
        setFaqs(response.data);
      } catch (error) {
        setError('Unable to fetch fruits. Please try again later.');
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    getFAQs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this fruit?')) {
      try {
        await axios.delete(`${API_BASE_URL}/faqs/${id}`);
        setFaqs(faqs.filter(faq => faq._id !== id));
      } catch (error) {
        setError('Unable to delete fruit. Please try again later.');
        console.error('Error deleting FAQ:', error);
      }
    }
  };

  return (
    <div className="faq-list-container">
      <h2>Fruit List</h2>
      <Link to="/add-faq" className="add-faq-button">Add New Fruit</Link>

      {loading && <div className="spinner">Loading...</div>}
      {error && <p className="error-message">{error}</p>}

      {faqs.length > 0 ? (
        <ul className="faq-list">
          {faqs.map(faq => (
            <li key={faq._id} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
              {faq.imageUrl && (
                <img
                  src={`${API_BASE_URL}/${faq.imageUrl}`}
                  alt={faq.question}
                  className="faq-image"
                  onError={(e) => {
                    e.target.src = `${API_BASE_URL}/uploads/default-image.jpg`;
                  }}
                />
              )}
              <div className="faq-buttons">
                <Link to={`/edit-faq/${faq._id}`} className="edit-button">Edit</Link>
                <button onClick={() => handleDelete(faq._id)} className="delete-button">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No fruits available.</p>
      )}
    </div>
  );
};

export default FAQList;
