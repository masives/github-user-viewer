import React, { useState } from 'react';
import './App.css';
import useUserForm from './components/UserForm/useUserForm';
import UserForm from './components/UserForm/UserForm';
import { GithubUser, GithubRepository } from './types/github';
import { fetchGithubUserData } from './api/github';
import UserDisplay from './components/UserDisplay/UserDisplay';
import { filterTopRepositories } from './utils/github';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
  const { username, handleUserNameChange } = useUserForm();
  const [userDetails, setUserDetails] = useState<GithubUser | null>(null);
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = async () => {
    if (!Boolean(username)) {
      setErrorMessage('Please provide username');
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const { user, repositories } = await fetchGithubUserData(username);
      setUserDetails(user);
      const topRepositories = filterTopRepositories({ repositories, count: 3 });
      setRepositories(topRepositories);
    } catch (error) {
      setErrorMessage(error.message);
      setUserDetails(null);
      setRepositories([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <UserForm handleUserNameChange={handleUserNameChange} handleFormSubmit={handleFormSubmit} username={username} />
      {!isLoading ? <UserDisplay repositories={repositories} userDetails={userDetails} /> : <LoadingIndicator />}
      {Boolean(errorMessage) && <div>{errorMessage}</div>}
    </div>
  );
}

export default App;
