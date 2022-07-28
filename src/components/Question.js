import {useState} from "react";
import {handleVoteOnQuestion} from "../actions/shared";
import Nav from "./Nav";
import {connect} from "react-redux";

const Question = ({ dispatch, authedUser, id, question, avatarURL, answer }) => {
  const [answered, setAnswered] = useState(answer !== null);
  const [selectedAnswer, setSelectedAnswer] = useState(answer)

  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

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
      <div data-testid={'question-container'}>
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
                  disabled={answered}
              />
              {question.optionOne.text}
            </label>
            {answered && <div>
              <p>Number of votes: {question.optionOne.votes.length}</p>
              <p>Percentage of vote: {Number(question.optionOne.votes.length / totalVotes)
                  .toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 2})
              }</p>
            </div>
            }
          </div>
          <div className="radio">
            <label>
              <input
                  type="radio"
                  value="optionTwo"
                  checked={selectedAnswer === "optionTwo"}
                  onChange={()=>setSelectedAnswer("optionTwo")}
                  disabled={answered}
              />
              {question.optionTwo.text}
            </label>
            {answered && <div>
              <p>Number of votes: {question.optionTwo.votes.length}</p>
              <p>Percentage of vote: {Number(question.optionTwo.votes.length / totalVotes)
                  .toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 2})
              }</p>
            </div>
            }
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
  const questionId = props.id;
  const question = questions[questionId];
  const avatarURL = users[question.author].avatarURL

  let answer = null;

  if (questions[questionId].optionOne.votes.includes(authedUser)) {
    answer = "optionOne"
  } else if (questions[questionId].optionTwo.votes.includes(authedUser)) {
    answer = "optionTwo"
  }

  return {
    authedUser,
    id: questionId,
    question,
    avatarURL ,
    answer
  }
}

export default connect(mapStateToProps)(Question);
