import React from 'react';
import { actors } from '../data';

const renderActors = () => {
  return actors.map(actor => (
    <div>
      <h4>Name: {actor.name}</h4>
      <p>Movies: 
        <ul>
          {actor.movies.map(movie => (
            <li>{movie}</li>
          ))}
        </ul>
      </p>
    </div>
  ))
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
