import React, { Component } from 'react';
import './UserTable.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

class UserTable extends Component {
  render() {
    const { users, editUser, deleteUser } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Usercomment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.comment}</td>
                  <td
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p>
                      <FaTimes
                        onClick={() => deleteUser(user.id)}
                        className='delIcon'
                      />
                    </p>
                    <p>
                      <FaPencilAlt
                        onClick={() => editUser(user.id, user)}
                        className='editIcon'
                      />
                    </p>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
