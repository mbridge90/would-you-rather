import {connect} from "react-redux";
import { useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;}

  return ComponentWithRouterProp
}

const QuestionPage = (props) => {
  console.log(props);
  return <h3>Placeholder Question Page</h3>
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const questionId = props.router.params.id;
  return {
    id: questionId,
    question: questions[questionId],
    answer: questions[questionId].optionOne.votes.includes(authedUser) ? "optionOne" :
        questions[questionId].optionOne.votes.includes(authedUser) ? "optionTwo" : null
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
