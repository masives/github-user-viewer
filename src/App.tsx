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
  const [isGithubUserLoading, setIsGithubUserLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = async () => {
    if (!Boolean(username)) {
      setErrorMessage('Please provide username');
      return;
    }
    setIsGithubUserLoading(true);
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
      setIsGithubUserLoading(false);
    }
  };

  return (
    <div className="App">
      <UserForm
        handleUserNameChange={handleUserNameChange}
        handleFormSubmit={handleFormSubmit}
        username={username}
        errorMessage={errorMessage}
      />
      <UserDisplay repositories={repositories} userDetails={userDetails} isLoading={isGithubUserLoading} />
    </div>
  );
}

export default App;
