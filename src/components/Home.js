import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <ul>
        {lyrics.map((lyric) => (
          <li key={lyric.id}>
            <a href={`/lyrics/${lyric.id}`}>{lyric.title} by {lyric.artist}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
