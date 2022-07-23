import './App.css';
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";

const App = (props) => {
  useEffect(() => {
        props.dispatch(handleInitialData());
      },
      []
  )

  return (
    <div className="App">
      {props.loggedIn === true ? <Dashboard /> : <LoginPage />}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => (
    {
      loggedIn: authedUser !== null,
    }
)

export default connect(mapStateToProps)(App);
