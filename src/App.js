import './App.css';
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

const App = (props) => {
  useEffect(() => {
        props.dispatch(handleInitialData());
      },
      []
  )

  return (
    <div className="App">
      <header className="App-header">
        <p>
          My lovely App
        </p>
      </header>
    </div>
  );
}

export default connect()(App);
