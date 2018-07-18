import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ pic: { img, alt } }) => (
  <img src={require(`images/${img}`)} alt={alt} />
);

SVG.propTypes = {
  pic: PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default SVG;
