import * as React from 'react';
import { render } from '@testing-library/react';
import User from './User';


describe('User', () => {
  it('matches the snapshot when a user is passed', () => {
    const user = {
      id: 'sarahedo',
      password:'password123',
      name: 'Sarah Edo',
      avatarURL: "https://robohash.org/d48632ee99cc5c627037fef61bbca517?set=set4&bgset=&size=200x200",
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    }
    const component = render(
        <User user={user} />
    );
    expect(component).toMatchSnapshot();
  });
});
