import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    receiveUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSend = () => {
    // Prepare email content
    const emailContent = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
      Receive Updates: ${formData.receiveUpdates ? 'Yes' : 'No'}
    `;

    // Open the default email client
    window.location.href = `mailto:info@udiaa.or.tz?subject=${formData.subject}&body=${emailContent}`;
  };

  return (
    <div className="contact-form-container" id="contact-section">
      <form>
        <div className="name-container">
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
        </div>
        <div className="name-container">
            <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>
            <input type="checkbox" name="receiveUpdates" checked={formData.receiveUpdates} onChange={handleChange} />
            Receive updates on your email?
          </label>
        </div>
      </form>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ContactForm;
