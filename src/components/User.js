const User = ({ user }) => {
  return (
      <div>
        <h3>{user.name}</h3>
        <img src={user.avatarURL}/>
        <p>Questions Answered: {Object.keys(user.answers).length}   Questions Asked: {user.questions.length}</p>
      </div>
  )
}

export default User;
