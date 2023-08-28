import YouTube from 'react-youtube';
import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Card, Button, Container, Col } from 'react-bootstrap';
//  import CommentSection from './CommentSection';
import UserComments from './usercomments/UserComments';
import './VideoDisplay.css';
import LikesDisLikes from './LikesDisLikes.js';
//  import Ratings from './Ratings.js';
//  import Counter from './Counter.js';
// import LikesUnLikes from './LikesDisLikes.js';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class VideoDisplay extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      found: false,
      vidtitle: '',
    };
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${this.props.videoId}&key=YOUR_API_KEY={process.env.REACT_APP_API_KEY}
  &part=snippet,status`
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        const num = data.pageInfo.totalResults;
        let found = true;
        let vidtitle = '';
        if (num.length !== 0) {
          vidtitle = data.items[0].snippet.title;
          found = false;
        }

        this.setState({
          result: num,
          found: found,
          vidtitle: vidtitle,
        });
      });
  }
  VideoPlay = (event) => {
    event.target.playVideo();
  };

  render() {
    const { id } = this.props.params;
    const { videoId } = this.props;
    return (
      <>
        <Container className='p-4'>
          <Col md='4'>
            <Card style={{ width: '30rem' }}>
              <Card.Img />
              <Card.Body>
                <Card.Title>{this.state.vidtitle}</Card.Title>
                <Card.Text>
                  {this.state.found && (
                    <Navigate to='/notfound' replace={true} />
                  )}
                  <iframe
                    title={this.state.vidtitle}
                    width='400'
                    height='400'
                    src={`https://www.youtube.com/embed/${id}`}
                  />
                  {/* <YouTube videoId={id} onReady={this.VideoPlay} /> */}
                </Card.Text>
                <Button variant='danger'>
                  {' '}
                  <Link
                    className='new-search-btn-link'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      backgroundColor: '#ff0000',
                    }}
                    to='/'
                  >
                    Search New Videos
                  </Link>
                </Button>

                <span class='counter'>
                  {/* <Counter /> */}
                  <LikesDisLikes />
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Container>
        {/* <section>
          <YouTube videoId={id} onReady={this.VideoPlay} />
          <Link className='new-search-btn-link' to='/'>
            Search New Videos
          </Link>
        </section>*/}

        <section>
          {/* <CommentSection /> */}
          <UserComments />
        </section>
      </>
    );
  }
}

export default withParams(VideoDisplay);
