import {connect} from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import {useState} from "react";
import { handleVoteOnQuestion } from "../actions/questions";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;}

  return ComponentWithRouterProp
}

const QuestionPage = ({ dispatch, authedUser, id, question, avatarURL, answer}) => {
  const [answered, setAnswered] = useState(answer !== null);
  const [selectedAnswer, setSelectedAnswer] = useState(answer)

  console.log(answered)
  console.log(selectedAnswer)

  const formSubmit = (event) => {
    event.preventDefault();
    setAnswered(true);
    dispatch(handleVoteOnQuestion({
      authedUser,
      qid: id,
      answer: selectedAnswer
    }))
  }

  return (
      <div>
        <Nav />
        <img src={avatarURL} />
        <h3>Would you rather....</h3>
        <div>
          <div className="radio">
            <label>
              <input
                  type="radio"
                  value="optionOne"
                  checked={selectedAnswer === "optionOne"}
                  onChange={()=>setSelectedAnswer("optionOne")}
              />
              {question.optionOne.text}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                  type="radio"
                  value="optionTwo"
                  checked={selectedAnswer === "optionTwo"}
                  onChange={()=>setSelectedAnswer("optionTwo")}
              />
              {question.optionTwo.text}
            </label>
          </div>

          {!answered &&
            <button className="btn btn-default" onClick={formSubmit}>
              Submit
            </button>
          }
        </div>
      </div>
  )
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const questionId = props.router.params.id;
  const question = questions[questionId];
  const avatarURL = users[question.author].avatarURL
  let answer = null

  if (questions[questionId].optionOne.votes.includes(authedUser)) {
    answer = "optionOne"
  } else if (questions[questionId].optionOne.votes.includes(authedUser)) {
    answer = "optionTwo"
  }

  return {
    authedUser,
    id: questionId,
    question,
    avatarURL ,
    answer,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
