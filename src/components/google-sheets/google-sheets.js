import React from 'react';
import './google-sheets.css';

const GoogleSheets = () => {
  const handleCreate = () => {
    window.open('https://docs.google.com/spreadsheets/create', '_blank');
  };

  return (
    <div className="google-sheets">
      <h2>Google Sheets</h2>
      <button onClick={handleCreate}>Create New Spreadsheet</button>
    </div>
  );
};

export default GoogleSheets;
