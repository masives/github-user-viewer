import React from 'react';
import renderer from 'react-test-renderer';
import UserForm from './UserForm';

describe('UserForm component', () => {
  it('Should render correctly without error', () => {
    const component = renderer.create(
      <UserForm handleFormSubmit={() => {}} handleUserNameChange={() => {}} username="" errorMessage={null} />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render correctly with error', () => {
    const component = renderer.create(
      <UserForm handleFormSubmit={() => {}} handleUserNameChange={() => {}} username="" errorMessage="Some error message" />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
