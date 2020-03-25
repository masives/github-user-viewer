import { GithubRepository, GithubUser } from '../types/github';

const GITHUB_ERRORS = {
  NO_USER: "User doesn't exist",
  UNEXPECTED: 'Unexpected error occured',
};

export const fetchGithubUserData = (username: string): Promise<{ repositories: GithubRepository[]; user: GithubUser }> => {
  return Promise.all([fetch(`https://api.github.com/users/${username}`), fetch(`https://api.github.com/users/${username}/repos`)])
    .then(([userResponse, repositoriesResponse]) => {
      if (userResponse.ok && repositoriesResponse.ok) {
        return Promise.all([userResponse.json(), repositoriesResponse.json()]);
      }
      if (userResponse.status === 404) {
        throw new Error(GITHUB_ERRORS.NO_USER);
      }
      throw new Error(GITHUB_ERRORS.UNEXPECTED);
    })
    .then(([user, repositories]) => {
      return { user, repositories };
    });
};
