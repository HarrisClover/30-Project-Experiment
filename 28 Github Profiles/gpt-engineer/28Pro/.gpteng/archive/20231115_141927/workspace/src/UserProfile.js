import React from 'react';
import RepositoryList from './RepositoryList';

const UserProfile = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <RepositoryList repos_url={user.repos_url} />
    </div>
  );
};

export default UserProfile;
