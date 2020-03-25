import React, { useState } from 'react';
import './App.css';
import useUserForm from './components/UserForm/useUserForm';
import UserForm from './components/UserForm/UserForm';
import { GithubUser, GithubRepository } from './types/github';
import { fetchGithubUserData } from './api/github';
import UserDisplay from './components/UserDisplay/UserDisplay';

function App() {
  const { username, handleUserNameChange } = useUserForm();
  const [userDetails, setUserDetails] = useState<GithubUser | null>(null);
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);

  const handleFormSubmit = async () => {
    const { user, repositories } = await fetchGithubUserData(username);
    setUserDetails(user);
    setRepositories(repositories);
  };

  return (
    <div className="App">
      <UserForm handleUserNameChange={handleUserNameChange} handleFormSubmit={handleFormSubmit} username={username} />
      <UserDisplay repositories={repositories} userDetails={userDetails} />
    </div>
  );
}

export default App;
