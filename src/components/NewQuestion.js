import Nav from "./Nav";
import { connect } from "react-redux";
import { useState } from "react";
import { handleSaveQuestion } from "../actions/shared";
import {useNavigate} from "react-router-dom";

const NewQuestion = ({ dispatch, authedUser }) => {
  const [optionOne, setOptionOne] = useState("")
  const [optionTwo, setOptionTwo] = useState("")
  const navigate = useNavigate();

  const handleChange = (e, setOptionFunction) => {
    const text = e.target.value;

    setOptionFunction(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleSaveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    }));

    setOptionOne("");
    setOptionTwo("");

    navigate("/");
  };

  return (
      <div>
        <Nav />
        <h3>Add a New Question</h3>
        <form className="new-question" onSubmit={handleSubmit}>
          <div>
            <label>Enter Option One</label>
            <textarea
              placeholder="Enter text for option one"
              value={optionOne}
              onChange={(e)=>handleChange(e,setOptionOne)}
              className="textarea"
            />
          </div>
          <div>
            <label>Enter Option Two</label>
            <textarea
              placeholder="Enter text for option two"
              value={optionTwo}
              onChange={(e)=>handleChange(e,setOptionTwo)}
              className="textarea"
            />
          </div>

        <button className="btn" type="submit" disabled={optionOne === "" || optionTwo === ""}>
          Save Poll
        </button>
        </form>

      </div>
  )
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion);
