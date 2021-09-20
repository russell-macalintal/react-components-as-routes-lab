import React from 'react';
import { directors } from '../data';

const renderDirectors = () => {
  return directors.map(director => (
    <div>
      <h4>Name: {director.name}</h4>
      <p>Movies:
        <ul>
          {director.movies.map(movie => (
            <li>{movie}</li>
          ))}
        </ul>
      </p>
    </div>
  ))
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
};

export default Directors
