import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

const mockState = {
  authedUser: 'sarahedo',
  questions: {
    "loxhs1bqm25b708cmbf3g": {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'have code reviews conducted by peers',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'have code reviews conducted by managers'
      }
    },
    "vthrdm985a262al8qx3do": {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'take a course on ReactJS',
      },
      optionTwo: {
        votes: ['mtsamis'],
        text: 'take a course on unit testing with Jest'
      }
    }
  },
  users: {
    sarahedo: {
      id: 'sarahedo',
      password: 'password123',
      name: 'Sarah Edo',
      avatarURL: "https://robohash.org/d48632ee99cc5c627037fef61bbca517?set=set4&bgset=&size=200x200",
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      password: 'abc321',
      name: 'Tyler McGinnis',
      avatarURL: "https://robohash.org/6e857b9b35a05a29bc5da48cdde8ff65?set=set4&bgset=&size=200x200",
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
  },
}

export const storeMocked = mockStore(mockState);
export const storeMockedNoAuthedUer = mockStore({
  ...mockState,
  authedUser: null,
})

