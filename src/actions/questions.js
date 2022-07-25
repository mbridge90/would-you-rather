import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_ON_QUESTION = "VOTE_ON_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

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
      //TODO: ADD ACTION TO REMOVE AUTHEDUSER FROM VOTES
      alert("There was an error saving your answer. Please try again.")
        }
    )
  }
}

export function addNewQuestion(formattedQuestion) {
  return {
    type: SAVE_QUESTION,
    question: formattedQuestion
  }
}

export function handleSaveQuestion(question) {
  console.log("In handleSaveQuestion")
  return _saveQuestion(question).then((formattedQuestion)=>{
    console.log(formattedQuestion);
    return (dispatch) => dispatch(addNewQuestion(formattedQuestion))
  }).catch((e) => {
    console.warn("Error saving new question: ", e);
    alert("There was an error saving your question. Please try again.")
  })
}

