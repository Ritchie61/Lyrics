import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Lyrics = ({ match }) => {
  const [lyric, setLyric] = useState(null);

  useEffect(() => {
    const fetchLyric = async () => {
      const response = await axios.get(`/api/lyrics/${match.params.id}`);
      setLyric(response.data);
    };
    fetchLyric();
  }, [match.params.id]);

  return (
    <div>
      {lyric ? (
        <>
          <h2>{lyric.title} by {lyric.artist}</h2>
          <pre>{lyric.lyrics}</pre>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Lyrics;
