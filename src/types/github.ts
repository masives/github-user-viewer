export type GithubRepository = {
  id: number;
  fork: boolean;
  name: string;
  stargazers_count: number;
  html_url: string;
};

export type GithubUser = {
  name: string;
  avatar_url: string;
  bio: string;
};
