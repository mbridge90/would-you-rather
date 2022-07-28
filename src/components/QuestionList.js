import QuestionPreview from "./QuestionPreview";

const QuestionList = ({ questions}) => {
  return (
      <div>
        <ul data-testid={'question-list'}>
          {questions.map((question) => (
              <li data-testid={question.id} key={question.id}>
                <QuestionPreview question={question}/>
              </li>
          ))}
        </ul>
      </div>
  )
}

export default QuestionList;
