import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoId, videoTitle }) => (
  <div className="video">
    <iframe
      className="video__iframe"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={videoTitle || ''}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
  videoTitle: PropTypes.string,
};

export default Video;
