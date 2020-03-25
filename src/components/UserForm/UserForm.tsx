import * as React from 'react';
import styles from './UserForm.module.css';

type PropTypes = {
  username: string;
  handleUserNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: () => void;
  errorMessage: string | null;
};

const UserForm = ({ username, handleUserNameChange, handleFormSubmit, errorMessage }: PropTypes) => {
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFormSubmit();
  };

  return (
    <>
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
          <button className={styles.button} type="submit">
            Submit
          </button>
        </label>
      </form>
      {Boolean(errorMessage) && <p>{errorMessage}</p>}
    </>
  );
};

export default UserForm;
