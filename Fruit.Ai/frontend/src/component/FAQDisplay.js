import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchFAQs, updateFAQ } from '../api/api';
import '../css/FAQDisplay.css';

const FruitEdit = () => {
  const { id } = useParams();
  const [fruit, setFruit] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getFruit = async () => {
      try {
        const response = await fetchFAQs();
        const fruitData = response.data.find(fruit => fruit._id === id);
        if (fruitData) {
          setFruit(fruitData);
          setName(fruitData.question); // Assuming question holds fruit name
          setDescription(fruitData.answer); // Assuming answer holds description
          if (fruitData.imageUrl) setImagePreview(fruitData.imageUrl); // Image preview
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Fruit:', error);
        setLoading(false);
      }
    };

    getFruit();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Preview image before upload
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitDisabled(true);

    try {
      const formData = new FormData();
      formData.append('question', name); // Assuming question is the fruit name
      formData.append('answer', description); // Assuming answer is the description
      if (image) {
        formData.append('image', image);
      }

      await updateFAQ(id, formData);
      setNotification('Fruit updated successfully!');
      setTimeout(() => navigate('/faq'), 1500); // Redirect to FAQ list after 1.5 seconds
    } catch (error) {
      setNotification('Failed to update Fruit.');
      console.error('Error updating Fruit:', error.response ? error.response.data : error.message);
    } finally {
      setSubmitDisabled(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="fruit-edit-container">
      <h2>Edit Fruit Details</h2>
      {notification && <p className="notification">{notification}</p>}
      <form onSubmit={handleSubmit} className="fruit-form">
        <div className="form-group">
          <label htmlFor="name">Fruit Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
          />
          {imagePreview && <img src={imagePreview} alt="Fruit Preview" className="image-preview" />}
        </div>
        <button type="submit" disabled={submitDisabled}>
          {submitDisabled ? 'Updating...' : 'Update Fruit'}
        </button>
      </form>
      <button onClick={() => navigate('/faq')} className="back-button">
        Back to List
      </button>
    </div>
  );
};

export default FruitEdit;
