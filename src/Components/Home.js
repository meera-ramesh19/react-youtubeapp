import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import './Home.css';
import SearchBar from './SearchBar.js';
import { decode } from 'html-entities';

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
  defaultOptions.push(`option ${i}`);
  defaultOptions.push(`suggesstion ${i}`);
  defaultOptions.push(`advice ${i}`);
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchedVideos: [],
      searchInput: '',
      // safeSearchSelect: '',
      // orderSelect: '',
      optionsInput: [],
      videoNumber: 5,
    };
  }

  fetchData = (
    input,
    max
    // orderVal, safe
  ) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${input}&key=${process.env.REACT_APP_API_KEY}`
    )
      // &orderby=${orderVal}&safeSearch=${safe}
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          searchedVideos: [...data.items],
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: true,
        });
      });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchInput: event.target.value });
  };

  selectedVideos = (event) => {
    event.preventDefault();
    this.setState({ orderSelect: event.target.value });
  };
  handleSafeSearch = (event) => {
    event.preventDefault();
    this.setState({ safeSearchSelect: event.target.value });
  };

  onInputChange = (event) => {
    this.setState({
      optionsInput: defaultOptions.filter((option) =>
        option.includes(event.target.value)
      ),
    });
  };

  handleVideoNumber = (event) => {
    event.preventDefault();
    this.setState({ videoNumber: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('searchInput', this.state.searchInput);
    if (
      this.state.searchInput &&
      this.state.videoNumber
      // &&
      // this.state.orderSelect &&
      // this.state.safeSearchSelect
    ) {
      this.fetchData(
        this.state.searchInput,
        this.state.videoNumber
        // this.state.orderSelect,
        // this.state.safeSearchSelect
      );
      this.setState({
        searchInput: '',
        orderSelect: '',
        videoNumber: 5,
        safeSearchSelect: '',
      });
    }
  };

  render() {
    const { searchedVideos } = this.state;
    let results = searchedVideos.map((video) => {
      return (
        <div className='home-video' key={video.etag}>
          <Card
            className='text-center'
            style={{ width: '18rem', margin: '2rem 0rem' }}
          >
            <Card.Title style={{ color: 'black' }}>
              {decode(video.snippet.title)}
            </Card.Title>
            <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
              <Card.Img
                variant='top'
                src={video.snippet.thumbnails.medium.url}
              />
            </Link>
            <Card.Body>
              <Card.Text>
                <Card.Text>
                  <ListGroup className='list-group-flush'>
                    <ListGroupItem>
                      Title:
                      {decode(video.snippet.title)}
                    </ListGroupItem>
                    <ListGroupItem>
                      Description:
                      {decode(video.snippet.description)}
                    </ListGroupItem>
                    <ListGroupItem>
                      Published on:{' '}
                      {video.snippet.publishTime
                        ? video.snippet.publishTime.slice(0, 10)
                        : null}
                    </ListGroupItem>
                  </ListGroup>
                </Card.Text>
                {/* <Button variant='primary'>Go somewhere</Button> */}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <br /> */}
        </div>

        //  <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
        // //   <h4>{video.snippet.title}</h4>
        // //   <img
        // //     src={video.snippet.thumbnails.medium.url}
        // //     alt={video.snippet.title}
        // //   />
        // //   <h4>{video.snippet.description}</h4>
        // //   <div>
        // //     <h4>{video.snippet.regionCode}</h4>
        // //     <h4>
        // //       Uploaded on:{' '}
        // //       {video.snippet.publishTime
        // //         ? video.snippet.publishTime.slice(0, 10)
        // //         : null}
        // //     </h4>
        // //   </div>
        // // </Link>
      );
    });
    return (
      <div className='container'>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchInput={this.state.searchInput}
          orderSelect={this.state.orderSelect}
          selectedVideos={this.selectedVideos}
          videoNumber={this.state.videoNumber}
          handleVideoNumber={this.handleVideoNumber}
          safeSearchSelect={this.state.safeSearchSelect}
          handleSafeSearch={this.handleSafeSearch}
          onInputChange={this.onInputChange}
        />

        <section className='content-box'>
          {!searchedVideos.length ? (
            <h4
              className='text-md-center'
              style={{
                color: 'black',
                fontSize: 20,
                textAlign: 'center',
                background: 'lightgray',
                padding: '1rem 0rem',
                margin: '0 auto',
                width: '30rem',
              }}
            >
              No Search Results Yet! Please submit a search above
            </h4>
          ) : (
            ''
          )}
          <ul className='all-content'> {results} </ul>
          {/* <VideoList searchedVideos={searchedVideos} />  */}
        </section>
      </div>
    );
  }
}
export default Home;
