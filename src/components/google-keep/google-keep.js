import React from 'react';
import './google-keep.css';

const GoogleKeep = () => {
  return (
    <div className="google-keep">
      <iframe
        src="https://keep.google.com/"
        width="300"
        height="400"
        title="Google Keep"
      ></iframe>
      <div className="google-keep-controls">
        <a href="https://keep.google.com" target="_blank" rel="noopener noreferrer">
          Open in Google Keep
        </a>
      </div>
    </div>
  );
};

export default GoogleKeep;
