import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../../../commonlyUsedComponents/SVG';

import './buttonMore.css';

const ButtonMore = props => {
  const { content } = props;
  return (
    <div className="btn-more">
      <span>подробнее</span>
      <span className="arrow">
        <SVG pic={content} />
      </span>
    </div>
  );
};
ButtonMore.propTypes = {
  content: PropTypes.object.isRequired,
};
export default ButtonMore;
