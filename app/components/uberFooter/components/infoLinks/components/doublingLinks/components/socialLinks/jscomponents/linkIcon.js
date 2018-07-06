import React from 'react';
import PropTypes from 'prop-types';

const LinkIcon = props => {
  const { link, img } = props;

  return (
    <span className="icon soc-link">
      <a href={link}>
        <img src={img} alt="" />
      </a>
    </span>
  );
};

LinkIcon.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default LinkIcon;
