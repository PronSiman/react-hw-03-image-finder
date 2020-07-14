import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Modal = ({ url, closeModal }) => {
  return (
    <div className="Overlay" onClick={() => closeModal()} role="presentation">
      <div className="Modal">
        <img src={url} alt="Large" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
