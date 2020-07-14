/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ source, alt, callModal, largeImageURL }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className="ImageGalleryItem" onClick={() => callModal(largeImageURL)}>
      <img src={source} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  callModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
