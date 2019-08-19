import React from 'react';
import renderer from 'react-test-renderer';
import PaginaSobre from '../src/index';

describe('<PaginaSobre />', () => {
  it('renders placeholder div', () => {
    const tree = renderer.create(
      <PaginaSobre />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
