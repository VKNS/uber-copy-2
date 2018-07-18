import React from 'react';
import PropTypes from 'prop-types';

import SVG from 'components/commonlyUsedComponents/SVG/svg';
import './buttonMore.css';

const ButtonMore = ({ content }) => (
  <div className="btn-more">
    <span>подробнее</span>
    <span className="arrow">
      <SVG pic={content} />
    </span>
  </div>
);

ButtonMore.propTypes = {
  content: PropTypes.object.isRequired,
};
export default ButtonMore;
