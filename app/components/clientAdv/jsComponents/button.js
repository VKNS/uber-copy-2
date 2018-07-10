import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../../commonlyUsedComponents/SVG';

const Button = props => {
  const { pic } = props;
  return (
    <div className="button advantages-link">
      <div className="link">преимущества поездок с uber</div>
      <div className="arrow">
        <SVG pic={pic} />
      </div>
    </div>
  );
};

Button.propTypes = {
  pic: PropTypes.object.isRequired,
};

export default Button;
