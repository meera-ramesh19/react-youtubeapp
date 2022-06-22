import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { decode } from 'html-entities';

class VideoList extends Component {
  render() {
    const { searchedVideos } = this.props;

    let results = searchedVideos.map((video) => {
      return (
        <div key={video.etag}>
          <Link to={`/videos/${video.id.videoId}`}>
            <h4>{decode(video.snippet.title)}</h4>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={decode(video.snippet.title)}
            />
          </Link>
          {/* <h4>{decode(video.snippet.description)}</h4> */}
          <div>
            {/* <h4>{video.snippet.regionCode}</h4> */}
            <h4>
              Uploaded on:{' '}
              {video.snippet.publishTime
                ? video.snippet.publishTime.slice(0, 10)
                : null}
            </h4>
          </div>
        </div>
      );
    });
    return { results };
  }
}

export default VideoList;
