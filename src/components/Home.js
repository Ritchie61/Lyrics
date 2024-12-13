import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    const fetchLyrics = async () => {
      const response = await axios.get('/api/lyrics');
      setLyrics(response.data);
    };
    fetchLyrics();
  }, []);

  return (
    <div>
      <h2>Lyrics List</h2>
      <Link to="/add-lyrics">Add Lyrics</Link>
      <ul>
        {lyrics.map((lyric) => (
          <li key={lyric.id}>
            <Link to={`/lyrics/${lyric.id}`}>{lyric.title} by {lyric.artist}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

