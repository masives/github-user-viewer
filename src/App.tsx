import React from 'react';
import './App.css';
import useUserForm from './components/UserForm/useUserForm';
import UserForm from './components/UserForm/UserForm';

function App() {
  const { username, handleUserNameChange } = useUserForm();

  const handleFormSubmit = () => {
    console.log('fetch user with username', username);
  };
  return (
    <div className="App">
      <UserForm handleUserNameChange={handleUserNameChange} handleFormSubmit={handleFormSubmit} username={username} />
    </div>
  );
}

export default App;
