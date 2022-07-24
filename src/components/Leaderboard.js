import {connect} from "react-redux";
import User from "./User";
import Nav from "./Nav";

const Leaderboard = ({ users }) => {
  return (
      <div className="leaderboard">
        <Nav />
        <h3>Leaderboard</h3>
        <ol>
          {users.map((user) => (
              <li key={user.id}>
                <User user={user}/>
              </li>))
          }
        </ol>
      </div>
  )
}

const mapStateToProps = ({ users }) => {
  const ranked_ids = Object.keys(users).sort(
      (a, b) =>
          (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)
  );

  let rankedUsersAsArray = [];

  for (const id of ranked_ids) {
    rankedUsersAsArray.push(users[id])
  }

  return {
    users: rankedUsersAsArray
  }
}

export default connect(mapStateToProps)(Leaderboard);
