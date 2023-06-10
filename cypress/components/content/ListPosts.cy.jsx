import React from 'react';
import ListPosts from '../../../src/app/content/components/ListPosts';

describe('<ListPosts />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListPosts />);
  });
});
