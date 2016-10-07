import React, {Component} from 'react';

import UserItem from './components/UserItem';

export default class Users extends Component {
  render() {
    const {users} = this.props;

    return (
      <div className="container">
        <h3>Users</h3>
        <ul>
          {users.map(user => {
            return (
              <UserItem key={user.id} onClick={this.props.onClick} {...user} />
            );
          })}
        </ul>
      </div>
    );
  }
}
