import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import { decode } from 'html-entities';
import Pagination from './Pagination.js';
import SearchBar from './SearchBar.js';
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchedVideos: [],
      searchInput: '',
    };
  }

  fetchData = (input) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${input}&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('searchInput', this.state.searchInput);
    if (this.state.searchInput) {
      this.fetchData(this.state.searchInput);
      this.setState({ searchInput: '' });
    }
  };

  render() {
    const { searchedVideos } = this.state;
    let results = searchedVideos.map((video) => {
      return (
        <>
          <div className='grid-display' key={video.etag}>
            <Card
              className='text-center'
              style={{ width: '18rem', margin: '2rem 0rem' }}
            >
              <Card.Title>{decode(video.snippet.title)}</Card.Title>
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
                        Uploaded on:{' '}
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
        </>
        // <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
        //   <h4>{video.snippet.title}</h4>
        //   <img
        //     src={video.snippet.thumbnails.medium.url}
        //     alt={video.snippet.title}
        //   />
        //   <h4>{video.snippet.description}</h4>
        //   <div>
        //     <h4>{video.snippet.regionCode}</h4>
        //     <h4>
        //       Uploaded on:{' '}
        //       {video.snippet.publishTime
        //         ? video.snippet.publishTime.slice(0, 10)
        //         : null}
        //     </h4>
        //   </div>
        // </Link>
      );
    });
    return (
      <div className='container'>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchInput={this.state.searchInput}
          // selectMaxResults={this.selectMaxResults}
        />
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
        {results}
        {/* {results.length > 0 ? <Pagination /> : null} */}
        {/* <VideoList searchedVideos={searchedVideos} />  */}
      </div>
    );
  }
}
export default Home;
