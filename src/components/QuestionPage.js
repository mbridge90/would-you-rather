import {connect} from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;}

  return ComponentWithRouterProp
}

const QuestionPage = ({ id, question, avatarURL}) => {
  return (
      <div>
        <Nav />
        <img src={avatarURL} />
        <h3>Would you rather....</h3>
        <p>{question.optionOne.text}</p>
        <p>{question.optionTwo.text}</p>
      </div>
  )
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const questionId = props.router.params.id;
  const question = questions[questionId];
  const avatarURL = users[question.author].avatarURL
  return {
    id: questionId,
    question,
    avatarURL ,
    answer: questions[questionId].optionOne.votes.includes(authedUser) ? "optionOne" :
        questions[questionId].optionOne.votes.includes(authedUser) ? "optionTwo" : null
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
