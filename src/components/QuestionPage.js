import {connect} from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import {useState} from "react";
import { handleVoteOnQuestion } from "../actions/questions";
import PageNotFound from "./404";
import Question from "./Question";

const QuestionPage = ({ existingQuestionIds }) => {
  let params = useParams();
  const id = params.id;

  if (existingQuestionIds.includes(id)) {
    return <Question id={id} />
  } else {
    return <PageNotFound />
  }
}

const mapStateToProps = ({ questions }) => {
  const existingQuestionIds = Object.keys(questions)

  return {
    existingQuestionIds,
  }
}

export default connect(mapStateToProps)(QuestionPage);
