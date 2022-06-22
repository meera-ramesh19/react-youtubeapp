import { React, Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      commentorName: '',
      userComments: '',
      id: null,
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleComments = (event) => {
    event.preventDefault();
    const { addComments } = this.props;
    const { videoId } = this.props;

    const { commentorName, userComments } = this.state;
    if (!commentorName || !userComments) return;
    // addComments(commentorName, userComments);
    this.setState({
      commentorName: '',
      userComments: '',
    });

    // const userInfo = {
    //   name: this.state.commentorName,
    //   message: this.state.userComments,
    //   id: this.state.commentId,
    // };
    // axios
    //   .post(`http://localhost:3000/videos/:${videoId}`, userInfo)
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
  };

  render() {
    const { commentorName, userComments } = this.state;
    const { addComments } = this.props;
    return (
      <div>
        <Container className='p-4'>
          <Col md='4'>
            <p className='text-center fs-3'>Add Comments</p>
            <Form id='comment' onSubmit={(event) => this.handleComments(event)}>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  placeholder='User Name'
                  style={{
                    maxWidth: '90rem',
                    width: '100%',
                  }}
                  // id='commentorName'
                  name='commentorName'
                  type='text'
                  value={commentorName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>userComments</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={2}
                  style={{
                    maxWidth: '90rem',
                    width: '100%',
                  }}
                  // id='userComments'
                  name='userComments'
                  type='text'
                  value={userComments}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                style={{ backgroundColor: '#ff0000' }}
                onClick={() => {
                  addComments(commentorName, userComments);
                }}
              >
                Add Comment
              </Button>
            </Form>
          </Col>
        </Container>
        {/* <form className='comment' onSubmit={this.handleComments}>
          <div> */}
        {/* <label htmlFor='commentorName'>Commentors Name</label>
            <input
              id='commentorName'
              name='commentorName'
              type='text'
              value={this.state.commentorName}
              onChange={this.handleChange}
              required
            />
            {/* <UserIcon image={process.env.REACT}/> 
          </div>

          <div>
            <label htmlFor='userComments'>Comments </label>
            <input
              id='userComments'
              name='userComments'
              type='text'
              value={this.state.userComments}
              onChange={this.handleChange}
              required
            />
          </div>

          <button>Add a Comment</button>
        </form> */}
      </div>
    );
  }
}
export default CommentForm;
