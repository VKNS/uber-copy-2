import React from 'react';
import PropTypes from 'prop-types';
/*
const base = require('path');
*/
const SVG = props => {
  const { path, alt = '' } = props;
  return <img src={`images/${path}`} alt={alt} />;
  /*return <img src={base.resolve(__dirname, path)} alt={alt} />;*/
};

SVG.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default SVG;
