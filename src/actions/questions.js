export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_ON_QUESTION = "VOTE_ON_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function voteOnQuestion({ authedUser, qid, answer }) {
  return {
    type: VOTE_ON_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function addNewQuestion(formattedQuestion) {
  return {
    type: SAVE_QUESTION,
    question: formattedQuestion
  }
}



