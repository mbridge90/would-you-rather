import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { getInitialData } from "../../utils/api";
import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(tweets));
    });
  };
}

export function login(id) {
  return (dispatch) => {
    dispatch(setAuthedUser(id));
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(setAuthedUser(null))
  }
}
