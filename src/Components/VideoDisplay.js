import YouTube from 'react-youtube';
import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommentSection from './CommentSection.js';
import './VideoDisplay.css';
import { Card, Button, Container, Col } from 'react-bootstrap';
import { Navigate } from "react-router-dom";
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class VideoDisplay extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      found: false,
      vidtitle:'',
    };
  }

  componentDidMount() {
    fetch(
  `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=YOUR_API_KEY={process.env.REACT_APP_API_KEY}
  &part=snippet,status`
    )
    .then((res) => {
      console.log(res)
      return res.json();
    })
    .then((data) => {
      const num = data.pageInfo.totalResults;
      let found=true;
      let vidtitle='';
      if (num.length !== 0) {
        vidtitle=data.items[0].snippet.title;
        found = false;}
    
      this.setState({
        result:num,
        found:found,
        vidtitle:vidtitle,
      });
    });
  }
  VideoPlay = (event) => {
    event.target.playVideo();
  };

  render() {
    const { id} = this.props.params;
    const {videoId}=this.props
    return (
      <>
        <Container className='p-4'>
          <Col md='4'>
            <Card style={{ width: '45rem' }}>
              <Card.Img />
              <Card.Body>
                <Card.Title >{this.state.vidtitle}</Card.Title>
                <Card.Text>
                  {this.state.found && <Navigate to='/notfound'replace={true} />}
                  <YouTube
                    videoId={id}
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
