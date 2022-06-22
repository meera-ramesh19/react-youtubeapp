import { React, Component } from 'react';
import { Container, Col } from 'react-bootstrap';
// import EditComments from './EditComments.js';

import ShowComments from './ShowComments.js';
// import { useParams } from 'react-router-dom';

// function withParams(Component) {
//   return (props) => <Component {...props} params={useParams()} />;
// }

class CommentFeed extends Component {
  render() {
    // const { id } = this.props.params;
    // const foundComments = this.props.commentsList.find((val, indx, obj) => {
    //   return val.id === Number(id);
    // });

    // const commentedMessage = this.props.commentsList.map((comment, index) => {
    //   return (
    //     <div>
    //       <Container className='p-4'>
    //         <Col md='4'>

    //           {/* <div key={index}>
    //             <h4>{comment.commentorName}</h4>
    //             <p>{comment.userComments}</p>
    //           </div> */}
    //         </Col>
    //       </Container>
    //     </div>
    //   );
    // });

    return (
      <section>
        <p className='text-left fs-3'>View Comments</p>

        <ShowComments
          id={this.props.commentsList.id}
          commentsList={this.props.commentsList}
          deleteComments={this.props.deleteComments}
          updateComments={this.props.updateComments}
        />

        {/* <p className='text-left fs-3'>Commented Section</p>
        {commentedMessage} */}
        {/* <EditComments
          key={this.props.commentsList.commentorName}
          commentsList={this.props.commentsList}
          userComments={this.props.commentsList.userComments}
          updateComments={this.props.updateComments}
        />
        <DeleteUserComments commentsList={this.props.commentsList} /> */}
        {/* </div> */}
      </section>
    );
  }
}
// export default withParams(CommentFeed);
export default CommentFeed;
