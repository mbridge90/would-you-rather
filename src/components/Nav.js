import { Link } from "react-router-dom";
import { logout } from "../actions/shared";
import {connect} from "react-redux";

const Nav = ({ authedUser, dispatch }) => {
  return (
      <nav className="nav-section">
        <ul>
          <li>
            <p>Logged in as: {authedUser}</p>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Create Question</Link>
          </li>
          <li>
            <Link to="/leaderboard">View Leaderboard</Link>
          </li>
          <li>
            <button onClick={()=>dispatch(logout())}>Logout</button>
          </li>
        </ul>
      </nav>
  )
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav);
