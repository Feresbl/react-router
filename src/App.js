import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Home component
const Home = () => {
  // Sample list of movies
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description of Movie 1',
      trailerLink: 'https://www.youtube.com/embed/trailer1',
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description of Movie 2',
      trailerLink: 'https://www.youtube.com/embed/trailer2',
    },
    // Add more movies here
  ];

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// MovieDetails component
const MovieDetails = ({ match }) => {
  // Get the movie ID from the URL parameter
  const { id } = match.params;

  // Sample movie object (you can fetch the actual movie details using the ID)
  const movie = {
    id: 1,
    title: 'Movie 1',
    description: 'Description of Movie 1',
    trailerLink: 'https://www.youtube.com/embed/trailer1',
  };

  return (
    <div>
      <h2>Movie Details</h2>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Movie Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
