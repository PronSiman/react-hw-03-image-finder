import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={150} color="#123abc" />
    </div>
  );
};

export default Loader;
