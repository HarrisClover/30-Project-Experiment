import React from 'react';

function Repository({ repo }) {
  return (
    <li>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
    </li>
  );
}

export default Repository;
