import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ChatbotPage.css';
import chatbot from "../assets/chatbot.jpeg";

const API_BASE_URL = 'https://fruit-ai-oi8l.onrender.com/api';

const ChatbotPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state for async actions

  // Fetch FAQs on component mount
  useEffect(() => {
    const fetchFAQs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/faqs`);
        setFaqs(response.data);
      } catch (error) {
        setError('Failed to load FAQs.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const handleFAQClick = (faq) => {
    setShowChat(true);
    setMessages([
      { type: 'user', text: faq.question },
      {
        type: 'bot',
        text: `Here's information about: ${faq.question}`,
        details: faq.answer,
        image: faq.imageUrl,
      },
    ]);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a valid query.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/faqs`);
      const filteredFAQ = response.data.find((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredFAQ) {
        setShowChat(true);
        setMessages([
          { type: 'user', text: searchQuery },
          {
            type: 'bot',
            text: `Here's information about ${filteredFAQ.question}:`,
            details: filteredFAQ.answer,
            image: filteredFAQ.imageUrl,
          },
        ]);
      } else {
        setMessages([
          { type: 'user', text: searchQuery },
          { type: 'bot', text: `No information found for "${searchQuery}".` },
        ]);
      }
    } catch (error) {
      setError('Failed to search FAQs.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-page">
      <header className="header">
        <img src={chatbot} alt="Chatbot Logo" className="logo" />
        <h1 className="chatbot-name">Fruit.AI Chatbot</h1>
      </header>

      <div className="chatbot-container">
        {error && <p className="error-message">{error}</p>}
        
        {isLoading ? (
          <div className="loading-indicator">Loading...</div>
        ) : (
          <>
            {showChat ? (
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.type}`}>
                    {msg.type === 'user' && <p>{msg.text}</p>}
                    {msg.type === 'bot' && (
                      <div className="message-content">
                        <p className="question">{msg.text}</p>
                        <p className="answer">{msg.details}</p>
                        {msg.image && (
                          <img
                            src={`https://fruit-ai-oi8l.onrender.com/${msg.image}`}
                            alt="Detail"
                            className="message-image"
                            onError={(e) => {
                              e.target.src =
                                'https://fruit-ai-oi8l.onrender.com/uploads/default-image.jpg'; // Fallback image
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="faq-list">
                {faqs.length ? (
                  faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="faq-card"
                      onClick={() => handleFAQClick(faq)}
                      role="button"
                      aria-label={`FAQ about ${faq.question}`}
                      tabIndex={0}
                    >
                      <p className="faq-question">{faq.question}</p>
                      {faq.imageUrl && (
                        <img
                          src={`https://fruit-ai-oi8l.onrender.com/${faq.imageUrl}`}
                          alt={faq.question}
                          className="faq-image"
                          onError={(e) => {
                            e.target.src =
                              'https://fruit-ai-oi8l.onrender.com/uploads/default-image.jpg';
                          }}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <p>No FAQs available at the moment.</p>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <footer className="footer">
        <input
          type="text"
          placeholder="Type your question..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search FAQ"
        />
        <button
          className="send-button"
          onClick={handleSearch}
          disabled={isLoading}
          aria-label="Submit your query"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </footer>
    </div>
  );
};

export default ChatbotPage;
