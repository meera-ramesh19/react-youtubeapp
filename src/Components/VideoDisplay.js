import YouTube from 'react-youtube';
import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommentSection from './CommentSection.js';
import './VideoDisplay.css';
import { Card, Button, Container, Col } from 'react-bootstrap';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class VideoDisplay extends Component {
  VideoPlay = (event) => {
    event.target.playVideo();
  };

  render() {
    const { id, vidtitle } = this.props.params;

    return (
      <>
        <Container className='p-4'>
          <Col md='4'>
            <Card style={{ width: '45rem' }}>
              <Card.Img />
              <Card.Body>
                <Card.Title>{vidtitle}</Card.Title>
                <Card.Text>
                  <YouTube
                    videoId={id}
                    title={vidtitle}
                    onReady={this.VideoPlay}
                  />
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
          <CommentSection />
        </section>
      </>
    );
  }
}

export default withParams(VideoDisplay);
