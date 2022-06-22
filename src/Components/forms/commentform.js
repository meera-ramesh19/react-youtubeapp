import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class commentform extends Component {
  state = {
    commentsArr: [],
  };

  removeComments = (index) => {
    const { commentsArr } = this.state;

    this.setState({
      commentsArr: commentsArr.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (comments) => {
    this.setState({ commentsArr: [...this.state.commentsArr, comments] });
  };

  render() {
    return (
      <div className='container'>
        <Table
          commentsData={this.state.commentsArr}
          removeComments={this.removeComments}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default commentform;
