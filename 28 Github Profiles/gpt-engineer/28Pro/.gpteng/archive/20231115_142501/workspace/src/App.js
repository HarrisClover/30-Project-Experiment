import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { getUserData } from './utils/api';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await getUserData(username);
    setUser(data);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {user && <UserProfile user={user} />}
    </div>
  );
}

export default App;
