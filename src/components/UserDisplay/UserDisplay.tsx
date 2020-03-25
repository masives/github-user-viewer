import * as React from 'react';
import { GithubRepository, GithubUser } from '../../types/github';
import LoadingIndicator from '../LoadingIndicator';
import styles from './UserDisplay.module.css';

type PropTypes = {
  repositories: GithubRepository[];
  userDetails: GithubUser | null;
  isLoading: boolean;
};

const UserDisplay = ({ repositories, userDetails, isLoading }: PropTypes) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (!userDetails) {
    return null;
  }

  const { name, avatar_url, bio } = userDetails;

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <img className={styles.profileImage} src={avatar_url} alt={`avatar of ${name}`} />
      <p>{Boolean(bio) ? bio : 'User has no bio available'}</p>
      <div>
        <h2>Top repositories</h2>
        <ol className={styles.repositoryList}>
          {repositories.map((repository) => {
            return (
              <li key={repository.id}>
                <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                  {repository.name}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default UserDisplay;
