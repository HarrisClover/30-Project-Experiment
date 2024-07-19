import React from 'react';

const Repository = ({ repo }) => {
  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    </div>
  );
};

export default Repository;
