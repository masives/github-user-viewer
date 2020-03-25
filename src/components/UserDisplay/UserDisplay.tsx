import * as React from 'react';
import { GithubRepository, GithubUser } from '../../types/github';

type PropTypes = {
  repositories: GithubRepository[];
  userDetails: GithubUser | null;
};

const UserDisplay = ({ repositories, userDetails }: PropTypes) => {
  if (!userDetails) {
    return null;
  }

  const { name, avatar_url, bio } = userDetails;

  return (
    <div>
      <h1>{name}</h1>
      <img src={avatar_url} alt={`avatar of ${name}`} />
      <p>{Boolean(bio) ? bio : 'User has no bio available'}</p>
      <div>
        <h2>Top repositories</h2>
        <ol>
          {repositories.map((repository) => {
            return (
              <li key={repository.id}>
                <a href={repository.html_url}>{repository.name}</a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default UserDisplay;
