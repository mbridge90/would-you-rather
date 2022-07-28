import {connect} from "react-redux";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Question from "./Question";

const QuestionPage = ({ existingQuestionIds }) => {
  let params = useParams();
  const id = params.id;

  if (existingQuestionIds.includes(id)) {
    return <Question id={id} />
  } else {
    return <PageNotFound existingQuestionsIds={existingQuestionIds} id={params.id}/>
  }
}

const mapStateToProps = ({ questions }) => {
  const existingQuestionIds = Object.keys(questions)

  return {
    existingQuestionIds,
  }
}

export default connect(mapStateToProps)(QuestionPage);
