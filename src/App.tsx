import React, { useState } from 'react';
import './App.css';
import useUserForm from './components/UserForm/useUserForm';
import UserForm from './components/UserForm/UserForm';
import { GithubUser, GithubRepository } from './types/github';
import { fetchGithubUserData } from './api/github';

function App() {
  const { username, handleUserNameChange } = useUserForm();
  const [userDetails, setUserDetails] = useState<GithubUser | null>(null);
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);

  const handleFormSubmit = async () => {
    const { user, repositories } = await fetchGithubUserData(username);
    setUserDetails(user);
    setRepositories(repositories);
  };

  console.log('display user', { userDetails, repositories });

  return (
    <div className="App">
      <UserForm handleUserNameChange={handleUserNameChange} handleFormSubmit={handleFormSubmit} username={username} />
    </div>
  );
}

export default App;
