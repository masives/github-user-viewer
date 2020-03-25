import * as React from 'react';
import styles from './UserForm.module.css';

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
    <form onSubmit={onFormSubmit} className={styles.form}>
      <label>
        Username
        <input
          className={styles.input}
          name="username"
          type="text"
          value={username}
          placeholder="eg. masives"
          onChange={handleUserNameChange}
        />
      </label>
    </form>
  );
};

export default UserForm;
