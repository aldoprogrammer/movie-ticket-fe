// ExampleComponent.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movies');
        setMovies(response.data.movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-red-400">Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="border-b border-gray-200 py-2">
            <p className="text-lg font-semibold">{movie.title}</p>
            <p className="text-gray-500">Showtimes: {movie.showtimes.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
