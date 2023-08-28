import React, { Component, Fragment } from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import UserTable from './UserTable';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

class UserComments extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: uuidv4(), name: 'Bob', comment: 'this is cool' },
        { id: uuidv4(), name: 'Bethany', comment: 'great job' },
      ],
      currentUser: { id: '', name: '', comment: '' },
      editing: false,
    };
  }

  componentDidMount() {
    const getUsers = JSON.parse(localStorage.getItem('userAdded'));

    if (getUsers == null) {
      this.setState({ users: [] });
    } else {
      this.setState({ users: getUsers });
    }
  }

  addUser = (user) => {
    user.id = uuidv4();
    this.setState({ users: [...this.state.users, user] });

    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new task!',
    });

    localStorage.setItem(
      'userAdded',
      JSON.stringify([...this.state.users, user])
    );
  };

  deleteUser = (id) => {
    this.setState({ editing: false });
    const deleteArr = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: deleteArr });

    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: 'You have successfully deleted a task!',
    });

    localStorage.setItem('userAdded', JSON.stringify(deleteArr));
  };

  editUser = (id, user) => {
    this.setState({ editing: true, currentUser: user });
  };

  updateUser = (id, newUser) => {
    const userdata = this.state.users.map((user) =>
      user.id === this.state.currentUser.id ? newUser : user
    );
    this.setState({
      users: userdata,
      currentUser: { id: '', name: '', comment: '' },
      editing: false,
    });

    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully edited an existing task!',
    });

    localStorage.setItem('userAdded', JSON.stringify(userdata));
  };

  render() {
    const { editing, currentUser, users } = this.state;

    return (
      <div className='container'>
        <h1>Comments CRUD</h1>
        <div className='flex-row'>
          <div className='flex-large'>
            {editing ? (
              <Fragment>
                <h2>Edit Comment</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={(value) => this.setState({ editing: value })}
                  currentUser={currentUser}
                  updateUser={this.updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add Comments</h2>
                <AddUserForm addUser={this.addUser} />
              </Fragment>
            )}
          </div>
          <div className='flex-large'>
            <h2>View Comments</h2>
            <UserTable
              users={users}
              editUser={this.editUser}
              deleteUser={this.deleteUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserComments;