import React, { Component } from 'react';
import './AddUserForm.css';

class AddUserForm extends Component {
  constructor() {
    super();
    this.state = {
      user: { id: null, name: '', comment: '' },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      user: { ...prevState.user, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, comment } = this.state.user;
    if (name && comment) {
      this.props.addUser(this.state.user);
      this.setState({ user: { id: null, name: '', comment: '' } });
    }
  };

  render() {
    const { user } = this.state;

    return (
      <form className='add-form'>
        <div className='form-control'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={user.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className='form-control'>
          <label>Usercomment</label>
          <input
            type='text'
            name='comment'
            value={user.comment}
            onChange={this.handleInputChange}
          />
        </div>
        <div className='form-control'>
          <button type='submit' onClick={this.handleSubmit}>
            Add new user
          </button>
        </div>
      </form>
    );
  }
}

export default AddUserForm;
