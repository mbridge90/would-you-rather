import QuestionPreview from "./QuestionPreview";

const QuestionList = ({ questions}) => {
  return (
      <div>
        <ul>
          {questions.map((question) => (
              <li key={question.id}>
                <QuestionPreview question={question}/>
              </li>
          ))}
        </ul>
      </div>
  )
}

export default QuestionList;
