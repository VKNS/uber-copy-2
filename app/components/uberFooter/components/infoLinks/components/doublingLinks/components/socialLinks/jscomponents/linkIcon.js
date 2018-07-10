import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../../../../../../../../commonlyUsedComponents/SVG';

const LinkIcon = props => {
  const { content } = props;
  return (
    <span className="icon soc-link">
      <a href={content.link}>
        <SVG pic={content.image} />
      </a>
    </span>
  );
};

LinkIcon.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LinkIcon;
