import React from 'react';
import renderer from 'react-test-renderer';
import UserDisplay from './UserDisplay';
import { GithubUser, GithubRepository } from '../../types/github';

const sampleUser: GithubUser = {
  avatar_url: 'https://valid-url.com/valid-image.png',
  bio: 'Some user bio',
  name: 'usename',
};

const repositories: GithubRepository[] = [
  {
    fork: true,
    html_url: 'https://github.com/username',
    id: 1,
    name: 'someName1',
    stargazers_count: 0,
  },
  {
    fork: true,
    html_url: 'https://github.com/username',
    id: 2,
    name: 'someName2',
    stargazers_count: 0,
  },
  {
    fork: true,
    html_url: 'https://github.com/username',
    id: 3,
    name: 'someName3',
    stargazers_count: 0,
  },
];

describe('UserDisplay component', () => {
  it('Should render correctly without user', () => {
    const component = renderer.create(<UserDisplay repositories={[]} userDetails={null} isLoading={false} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render correctly loading', () => {
    const component = renderer.create(<UserDisplay repositories={[]} userDetails={null} isLoading={true} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('Should render correctly with User Data', () => {
    it('for user with bio', () => {
      const component = renderer.create(<UserDisplay repositories={repositories} userDetails={sampleUser} isLoading={true} />);

      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('for user without bio', () => {
      const userWithoutBio: GithubUser = { ...sampleUser, bio: undefined };
      const component = renderer.create(<UserDisplay repositories={repositories} userDetails={userWithoutBio} isLoading={true} />);

      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
