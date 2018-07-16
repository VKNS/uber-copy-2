import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'components/commonlyUsedComponents/SVG/svg';

const LinkIcon = ({ content: { link, image } }) => (
  <span className="icon soc-link">
    <a href={link}>
      <SVG pic={image} />
    </a>
  </span>
);

LinkIcon.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LinkIcon;
