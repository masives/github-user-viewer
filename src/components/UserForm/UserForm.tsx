import * as React from 'react';

type PropTypes = {
  username: string;
  handleUserNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: () => void;
};

const UserForm = ({ username, handleUserNameChange, handleFormSubmit }: PropTypes) => {
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFormSubmit();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>Username</label>
      <input name="username" type="text" value={username} placeholder="eg. masives" onChange={handleUserNameChange} />
    </form>
  );
};

export default UserForm;
