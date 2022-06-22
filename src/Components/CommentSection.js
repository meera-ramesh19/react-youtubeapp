import { React, Component } from 'react';
import CommentForm from './CommentForm.js';
import CommentFeed from './CommentFeed.js';
import EditComments from './EditComments.js';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      commentsList: [],
      editing: false,
    };
  }

  editRow = (commentsList) => {
    this.setState({ editing: true });
    this.setState({
      id: commentsList.id,
      commentorName: commentsList.commentorName,
      userComments: commentsList.userComments,
      dates: new Date().toLocaleString(),
    });
  };

  updateComments = (id, updatedComment) => {
    this.setState({ editing: false });
    this.state.commentsList.map((comment) =>
      comment.id === id ? updatedComment : this.props.commentsList
    );
  };

  deleteComments = (id) => {
    const { commentsList } = this.state;
    commentsList.filter((comment) => comment.id === id);
  };

  addComments = (commentorName, userComments) => {
    const { commentsList } = this.state;
    const { videoId } = this.props;
    const dates = new Date().toLocaleString();
    const id = commentsList.length + 1;
    const userCommentList = { id, commentorName, userComments, dates };
    const newComments = [...commentsList, userCommentList];
    // window.localStorage.setItem(videoId, JSON.stringify(newComments));
    this.setState({ commentsList: newComments });
  };

  componentDidMount() {
   
    const storedLocalStorageComments = JSON.parse(
      window.localStorage.getItem('history')
    );
    if (storedLocalStorageComments !== null) {
      this.setState({ commentsList: storedLocalStorageComments });
    }
    window.addEventListener('storage', (event) => {
      console.log(event.key);
    });
  }

  componentDidUpdate() {
    const { videoId } = this.props;
    window.localStorage.setItem(
      'history',
      JSON.stringify(this.state.commentsList)
    );
  }

  render() {
    const { commentsList, editing } = this.state;
    const { videoId } = this.props;
    return (
      <div>
        <h5>COMMENTS SECTION</h5>

        {editing ? (
          <>
            <h2>Edit user</h2>
            <EditComments
              editing={editing}
              commentsList={commentsList}
              updateComments={this.updateComments}
            />
          </>
        ) : (
          <CommentForm
            addComments={this.addComments}
            videoId={videoId}
            commentsList={commentsList}
          />
        )}

        <CommentFeed
          commentsList={commentsList}
          updateComments={this.updateComments}
          deleteComments={this.deleteComments}
          editRow={this.editRow}
        />
      </div>
    );
  }
}
export default CommentSection;
