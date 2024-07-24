import React from 'react';
import './google-slides.css';

const GoogleSlides = () => {
  const handleCreate = () => {
    window.open('https://docs.google.com/presentation/create', '_blank');
  };

  return (
    <div className="google-slides">
      <h2>Google Slides</h2>
      <button onClick={handleCreate}>Create New Presentation</button>
    </div>
  );
};

export default GoogleSlides;
