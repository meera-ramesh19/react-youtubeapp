import React, { Component } from 'react';
// import axios from 'axios';
import { Button } from 'react-bootstrap';

class EditComments extends Component {
  constructor() {
    super();
    this.state = {
      user:'',
      comment:'',
      editing: false,
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { updatedComments, commentsList, commentId } = this.props;
    updatedComments(commentId, commentsList);
    // this.setState({ userComments: '' });
    // const userUpdate = {
    //   commentorName,
    //   userComments,
    // };
    // const json = JSON.stringify(userUpdate);
    // console.log(json);

    // axios
    //   .put(`http://localhost:3000/videos/:${videoId}` + this.props.data, json)
    //   .then((response) => {
    //     console.log(response);
    //   });
  };

  render() {
    const { userComments, commentorName } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={commentorName}
          defaultValue={commentorName}
          onChange={this.handleChange}
        />
        <input
          type='text'
          value={userComments}
          defaultValue={this.props.userComments}
          onChange={this.handleChange}
        />
        <Button>Edit/Update</Button>
        <Button
          onClick={() => this.setState({ editing: false })}
          className='button muted-button'
        >
          Cancel
        </Button>
      </form>
    );
  }
}
export default EditComments;
