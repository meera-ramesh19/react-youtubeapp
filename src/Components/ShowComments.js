import { React, Component } from 'react';
// import Form from 'react-bootstrap/Form';

import { Button, Table, Container, Col } from 'react-bootstrap';
// import axios from 'axios';

class ShowComments extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  editRow = (commentsList) => {
    this.setState({ editing: false });
  };
  render() {
    const { commentsList, deleteComments } = this.props;

    return (
      <div>
        <Container className='p-4'>
          <Col md='4'>
            <Table striped bordered hover responsive='lg'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>UserName</th>
                  <th colSpan={6}>Comments</th>
                  <th colSpan={6}>TimeStamp</th>
                  <th colSpan={10}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {commentsList.length > 0 ? (
                  commentsList.map((comment, index) => {
                    return (
                      // const { commentsId, commentorName,userComments} = comment;
                      <tr key={comment.id}>
                        <td>{(index += 1)}</td>
                        <td>{comment.commentorName}</td>
                        <td colSpan={6}>{comment.userComments}</td>
                        <td colSpan={6}>{comment.dates}</td>
                        <td colSpan={10}>
                          <Button
                            className='button muted-button'
                            onClick={() => 
                              this.editRow(comment)}
                          >
                            Edit
                          </Button>
                          {'   '}
                          <Button
                            className='button muted-button'
                            onClick={() => deleteComments(comment.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={4}>No users</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Container>
      </div>
    );
  }
}
export default ShowComments;
