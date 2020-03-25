import { GithubRepository } from '../types/github';

export const filterTopRepositories = ({ repositories, count }: { repositories: GithubRepository[]; count: number }) => {
  const ownRepositories = repositories.filter((repository) => !repository.fork);
  const sortedRepositories = [...ownRepositories].sort((a, b) => {
    if (a.stargazers_count < b.stargazers_count) {
      return 1;
    }
    if (a.stargazers_count > b.stargazers_count) {
      return -1;
    }
    return 0;
  });
  return sortedRepositories.slice(0, count);
};
