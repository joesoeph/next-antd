import React from 'react';
import DetailPost from '../../../src/app/content/components/DetailPost';

describe('<DetailPost />', () => {
  it('renders', () => {
    const post = {
      image: 'https://loremflickr.com/640/480?lock=8418795597070336',
      title: 'Example title',
      content: 'Content posts',
    };

    // see: https://on.cypress.io/mounting-react
    cy.mount(<DetailPost post={post} />);
  });
});
