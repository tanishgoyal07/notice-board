import React from 'react';
import './google-forms.css';

const GoogleForms = () => {
  const handleCreate = () => {
    window.open('https://docs.google.com/forms/create', '_blank');
  };

  return (
    <div className="google-forms">
      <h2>Google Forms</h2>
      <button onClick={handleCreate}>Create New Form</button>
    </div>
  );
};

export default GoogleForms;
