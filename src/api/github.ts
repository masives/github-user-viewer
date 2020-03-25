import { GithubRepository, GithubUser } from '../types/github';

export const fetchGithubUserData = (username: string): Promise<{ repositories: GithubRepository[]; user: GithubUser }> => {
  return Promise.all([fetch(`https://api.github.com/users/${username}`), fetch(`https://api.github.com/users/${username}/repos`)])
    .then(([userResponse, repositoriesResponse]) => {
      return Promise.all([userResponse.json(), repositoriesResponse.json()]);
    })
    .then(([user, repositories]) => {
      return { user, repositories };
    });
};
