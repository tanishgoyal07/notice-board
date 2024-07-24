import React from 'react';
import './music-player.css'; 

const MusicPlayer = () => {
  return (
    <div className="music-player">
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM"
        width="300"
        height="180"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
