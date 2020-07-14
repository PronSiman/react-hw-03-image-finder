import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onButttonClick }) => {
  return (
    <button type="button" className="Button" onClick={() => onButttonClick()}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onButttonClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
