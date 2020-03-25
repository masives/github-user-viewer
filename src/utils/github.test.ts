import { filterTopRepositories } from './github';
import { GithubRepository } from '../types/github';

const repositories: GithubRepository[] = [
  {
    fork: true,
    html_url: 'https://github.com/username',
    id: 1,
    name: 'someName1',
    stargazers_count: 100,
  },
  {
    fork: true,
    html_url: 'https://github.com/username',
    id: 2,
    name: 'someName2',
    stargazers_count: 100,
  },
  {
    fork: true,
    html_url: 'https://github.com/username',
    id: 3,
    name: 'someName3',
    stargazers_count: 100,
  },
  {
    fork: false,
    html_url: 'https://github.com/username',
    id: 4,
    name: 'someName4',
    stargazers_count: 10,
  },
  {
    fork: false,
    html_url: 'https://github.com/username',
    id: 5,
    name: 'someName5',
    stargazers_count: 30,
  },
  {
    fork: false,
    html_url: 'https://github.com/username',
    id: 6,
    name: 'someName6',
    stargazers_count: 50,
  },
];

describe('Utility filterTopRepository', () => {
  it('should not include forked repositories', () => {
    const result = filterTopRepositories({ repositories: repositories, count: 3 });

    const containsForks = result.some((repository) => repository.fork);

    expect(containsForks).toBe(false);
  });

  it('should return top results', () => {
    const result = filterTopRepositories({ repositories: repositories, count: 3 });

    expect(result[0].stargazers_count).toBeGreaterThanOrEqual(result[1].stargazers_count);
    expect(result[1].stargazers_count).toBeGreaterThanOrEqual(result[2].stargazers_count);
  });
});
