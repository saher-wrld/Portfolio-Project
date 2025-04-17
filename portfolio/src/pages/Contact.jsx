import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    if (!name || !email || !message) {
      setError('Please fill in all fields!');
      return;
    }

    // Submit form or do whatever
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <br />
        <br />

        <h2>contact...</h2>

        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="email">email address:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="message">message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
        />

        {error && <div className="error">{error}</div>}

        <button type="submit">submit</button>       
      </form>
    </div>
  );
}

export default Contact;
