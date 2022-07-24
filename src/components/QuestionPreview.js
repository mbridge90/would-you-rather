const QuestionPreview = ({ question }) => {
  return (
      <div>
        <p>{question.optionOne.text}</p>
        <p>OR</p>
        <p>{question.optionTwo.text}</p>
      </div>
  )
}

export default QuestionPreview;
