

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios.get('/api/joke')
      .then(response => {
        setJoke(response.data);
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
      });
  }, []);

  return (
    <>
      <h1>Rajan Bhai ke jokes</h1>
      <p>JOKE: {joke.length}</p>
      {
        joke.map((jokeItem, index) => (
          <div key={index}>
            <h2>{jokeItem.question}</h2>
            <p>{jokeItem.answer}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
