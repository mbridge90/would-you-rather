import {RECEIVE_QUESTIONS, SAVE_QUESTION, VOTE_ON_QUESTION} from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case VOTE_ON_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [...state[action.qid][action.answer].votes, action.authedUser]
          }
        }
      }
    case SAVE_QUESTION:
      return {
        ...state,
        [state.questions]: {
          ...state.questions,
          [action.question.id]: {...action.question }
        }
      }
    default:
      return state
  }
}
