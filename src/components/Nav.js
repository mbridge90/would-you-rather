import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <nav className="nav-section">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Create Question</Link>
          </li>
          <li>
            <Link to="/leaderboard">View Leaderboard</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav;
