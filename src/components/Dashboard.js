import { connect } from 'react-redux';
import {useEffect, useState} from "react";
import {handleInitialData} from "../actions/shared";

const Dashboard = (props) => {
  const[viewingUnanswered, setViewingUnanswered] = useState(true);

  useEffect(() => {
        props.dispatch(handleInitialData());
      },
      []
  )

  console.log(props)
  return (
      <div>
        {viewingUnanswered && (
          <div>
            <h3>Questions</h3>
              <h2>Unanswered Questions</h2>
              <ul>
                {props.unAnsweredQuestions.map((question) => (
                  <li key={question.id}>
                    <div>
                    Question id: {question.id}
                    </div>
                  </li>
                  ))}
              </ul>
          </div>
        )}

        {!viewingUnanswered && (
          <div>
            <h2>Answered Questions</h2>
            <ul>
              {props.answeredQuestions.map((question) => (
                <li key={question.id}>
                  <div>
                    Question id: {question.id}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )

        }

        <button onClick={() => setViewingUnanswered(!viewingUnanswered)}>
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
