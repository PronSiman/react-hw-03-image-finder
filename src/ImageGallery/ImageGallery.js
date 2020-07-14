import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, callModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          source={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
          callModal={callModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  callModal: PropTypes.func.isRequired,
};
