import React from 'react';
import Repository from './Repository';

function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <ul>
        {user.repositories.map((repo) => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
