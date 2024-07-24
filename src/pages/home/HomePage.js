import React from 'react';
import './HomePage.css';
import SearchBar from '../../components/searchbar/searchbar.js';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.js';
import MusicPlayer from '../../components/music-player/music-player.js';
import GoogleCalendar from '../../components/google-calender/google-calender.js';
import GoogleKeep from '../../components/google-keep/google-keep.js';
import GoogleSheets from '../../components/google-sheets/google-sheets.js';
import GoogleForms from '../../components/google-forms/google-forms.js';
import GoogleSlides from '../../components/google-slides/google-slides.js';

const HomePage = () => {
  return (
    <div className="homepage">
       <div className="search-bar-container">
        <SearchBar /> 
      </div>
      <div className="google-slides">
        <GoogleSlides />
      </div>
      <div className="google-sheets">
        <GoogleSheets />
      </div>
      <div className="google-forms">
        <GoogleForms />
      </div>
      <div className="pomodoro-timer">
        <PomodoroTimer />
      </div>
      <div className="music-player">
        <MusicPlayer />
      </div>
      <div className="calendar">
        <GoogleCalendar />
      </div>
      <div className="google-keep">
        <GoogleKeep />
      </div>
    </div>
  );
};

export default HomePage;