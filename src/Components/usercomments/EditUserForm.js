import React, { Component } from 'react';

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({ user: this.props.currentUser });
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      user: { ...prevState.user, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.user.name && this.state.user.comment) {
      this.props.updateUser(this.state.user.id, this.state.user);
    }
  };

  render() {
    const { user } = this.state;

    return (
      <form>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={user.name}
          onChange={this.handleInputChange}
        />
        <label>Usercomment</label>
        <input
          type='text'
          name='comment'
          value={user.comment}
          onChange={this.handleInputChange}
        />
        <button type='submit' onClick={this.handleSubmit}>
          Update user
        </button>
        <button
          onClick={() => this.props.setEditing(false)}
          className='button muted-button'
        >
          Cancel
        </button>
      </form>
    );
  }
}

export default EditUserForm;
