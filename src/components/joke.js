import React from 'react';
import {Link} from "react-router-dom";

const Joke = props => {
  const joke = props.joke;
  return (
    <p>
      <Link to='/photo'>
        <span>{joke.setup}</span>
        <span>{joke.punchline}</span>
      </Link>
    </p>
  );
};

export default Joke;
