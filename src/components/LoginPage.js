import Select from 'react-select';
import {connect} from "react-redux";
import {useState} from "react";
import { login } from "../actions/shared";

const LoginPage = (props) => {
  console.log(props)
  const [selectedUser, setSelectedUser] = useState()

  return (
      <div data-testid={'login-page'}>
        <Select
            options={props.users}
            onChange={e => setSelectedUser(e.value)}
        />
        <button onClick={()=>props.dispatch(login(selectedUser))} data-testid={'login-button'}>
          Login as selected User
        </button>
      </div>
  )
}

const mapStateToProps = ({ users }) => (
    {
      users: Object.keys(users).map((user) => ({
        label: users[user].name,
        value: users[user].id
      }))
    }
)

export default connect(mapStateToProps)(LoginPage);
