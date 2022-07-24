import { Link } from "react-router-dom";

const QuestionPreview = ({ question }) => {
  return (
      <Link to={`/questions/${question.id}`} className="question=preview">
        <p>{question.optionOne.text}</p>
        <p>OR</p>
        <p>{question.optionTwo.text}</p>
      </Link>
  )
}

export default QuestionPreview;
