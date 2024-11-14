import React, { useState } from 'react';
import './Form.css';

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', date: '', description: '', location: '' }); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type='date'
          name='date'
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name='description'
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type='text'
          name='location'
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <button type='submit'>Add</button>
    </form>
  );
};

export default FormComponent;