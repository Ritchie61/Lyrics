import React, { useState } from 'react';
import axios from 'axios';

const AddLyrics = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [songwriter, setSongwriter] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    try {
      await axios.post('/api/lyrics', {
        title,
        artist,
        album,
        songwriter,
        lyrics
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Lyrics added successfully!');
    } catch (err) {
      setError('Failed to add lyrics. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Lyrics</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Album Title"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Songwriter"
          value={songwriter}
          onChange={(e) => setSongwriter(e.target.value)}
        />
        <textarea
          placeholder="Lyrics"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          required
        />
        <button type="submit">Add Lyrics</button>
      </form>
    </div>
  );
};

export default AddLyrics;
