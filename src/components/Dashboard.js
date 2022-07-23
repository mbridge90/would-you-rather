import { connect } from 'react-redux';
import {useEffect} from "react";
import {handleInitialData} from "../actions/shared";

const Dashboard = (props) => {
  useEffect(() => {
        props.dispatch(handleInitialData());
      },
      []
  )

  console.log(props)
  return (
      <div>
        <h3>Questions</h3>
        <ul>
          {
            props.questionIds.map((id) => (
                <li key={id}>
                  <div>
                    Question id: {id}
                  </div>
                </li>
            ))
          }
        </ul>
      </div>
  )
}

const mapStateToProps = ({ questions }) => (
  {
    questionIds: Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  }
);

export default connect(mapStateToProps)(Dashboard);
