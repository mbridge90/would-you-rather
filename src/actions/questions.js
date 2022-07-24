import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_ON_QUESTION = "VOTE_ON_QUESTION"

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function voteOnQuestion({ authedUser, qid, answer }) {
  return {
    type: VOTE_ON_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function handleVoteOnQuestion(info) {
  return (dispatch) => {
    dispatch(voteOnQuestion(info));

    return _saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in _saveQuestionAnswer", e);
      // dispatch({...info,
      //         answer: null
      // });
      alert("There was an error saving your answer. Please try again.")
        }
    )
  }
}

