import {addQuestionToUser, receiveUsers, addVoteToUser} from "./users";
import {addNewQuestion, receiveQuestions, voteOnQuestion} from "./questions";
import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function login(id) {
  console.log("Logging in: ", id);
   return (dispatch) => {
     dispatch(setAuthedUser(id));
   }
}

export function logout() {
  return (dispatch) => {
    dispatch(setAuthedUser(null))
  }
}

export function handleSaveQuestion(question) {
  console.log("In handleSaveQuestion")
  return (dispatch) => {
    return _saveQuestion(question).then((formattedQuestion)=>{
      console.log(formattedQuestion);
      dispatch(addNewQuestion(formattedQuestion));
      dispatch(addQuestionToUser(formattedQuestion.author, formattedQuestion.id));
    }).catch((e) => {
      console.warn("Error saving new question: ", e);
      alert("There was an error saving your question. Please try again.")
    })
  }
}

export function handleVoteOnQuestion(info) {
  return (dispatch) => {
    dispatch(voteOnQuestion(info));
    dispatch(addVoteToUser(info));

    return _saveQuestionAnswer(info).catch((e) => {
          console.warn("Error in _saveQuestionAnswer", e);
          //TODO: ADD ACTION TO REMOVE AUTHEDUSER FROM VOTES
          alert("There was an error saving your answer. Please try again.")
        }
    )
  }
}
