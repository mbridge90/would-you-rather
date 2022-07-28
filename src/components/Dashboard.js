import { connect } from 'react-redux';
import {useEffect, useState} from "react";
import {handleInitialData} from "../actions/shared";
import QuestionList from "./QuestionList";
import Nav from "./Nav";

const Dashboard = (props) => {
  const[viewingUnanswered, setViewingUnanswered] = useState(true);

  useEffect(() => {
        props.dispatch(handleInitialData());
      },
      []
  )

  return (
      <div data-testid={'dashboard'}>
        <Nav />
        <h3>Would You Rather...</h3>
        {viewingUnanswered ?
            <QuestionList questions={props.unAnsweredQuestions}/>
            :
            <QuestionList questions={props.answeredQuestions}/>
        }

        <button data-testid ={"toggle-button"} onClick={() => setViewingUnanswered(!viewingUnanswered)}>
          View {viewingUnanswered ? "" : "un"}answered Questions
        </button>
      </div>
  )
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const question_ids_by_date = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp);

  let answeredQuestions = [];
  let unAnsweredQuestions = [];

  for (const id of question_ids_by_date) {
    if (Object.keys(users[authedUser].answers).includes(id)) {
      answeredQuestions.push(questions[id])
    } else {
      unAnsweredQuestions.push(questions[id])
    }
  }
  return {
    answeredQuestions,
    unAnsweredQuestions,
  }
}

export default connect(mapStateToProps)(Dashboard);
