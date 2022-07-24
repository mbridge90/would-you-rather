import './App.css';
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import QuestionPage from "./components/QuestionPage";

const App = (props) => {
  useEffect(() => {
        props.dispatch(handleInitialData());
      },
      []
  )

  return (
      <Fragment>
        <div className="App">
          {props.loggedIn === false ? <LoginPage /> : (
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/add" element={<NewQuestion />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/questions/:id" element={<QuestionPage />} />
            </Routes>
              )}
        </div>
      </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => (
    {
      loggedIn: authedUser !== null,
    }
)

export default connect(mapStateToProps)(App);
