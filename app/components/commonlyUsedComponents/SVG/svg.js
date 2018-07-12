import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ pic }) => (
  <img src={require(`../../../images/${pic.img}`)} alt={pic.alt} />
);

SVG.propTypes = {
  pic: PropTypes.object.isRequired,
};

export default SVG;
