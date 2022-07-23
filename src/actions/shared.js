import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { getInitialData } from "../../utils/api";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(tweets));
    });
  };
}
